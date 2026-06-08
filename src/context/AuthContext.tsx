import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const AUTH_STORAGE_KEY = "disanity.auth.user";
const AUTH_STORAGE_VERSION = 1;
const AUTH_SESSION_MS = 7 * 24 * 60 * 60 * 1000;

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface StoredAuthUser {
  version: number;
  expiresAt: number;
  user: AuthUser;
}

interface GoogleIdTokenPayload {
  sub?: string;
  email?: string;
  name?: string;
  picture?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAuthReady: boolean;
  isLoggingOut: boolean;
  loginWithGoogleCredential: (credential: string) => AuthUser;
  logout: () => void;
}

interface WindowWithGoogle {
  google?: {
    accounts: {
      id: {
        disableAutoSelect: () => void;
      };
    };
  };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredAuthUser());
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const loginWithGoogleCredential = useCallback((credential: string) => {
    const payload = decodeGoogleCredential(credential);
    const nextUser = buildAuthUser(payload);
    persistAuthUser(nextUser);
    setIsLoggingOut(false);
    setUser(nextUser);
    return nextUser;
  }, []);

  const logout = useCallback(() => {
    setIsLoggingOut(true);
    clearStoredAuthUser();
    (window as Window & WindowWithGoogle).google?.accounts.id.disableAutoSelect();
    setUser(null);
    window.setTimeout(() => setIsLoggingOut(false), 250);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAuthReady: true,
      isLoggingOut,
      loginWithGoogleCredential,
      logout,
    }),
    [isLoggingOut, loginWithGoogleCredential, logout, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function readStoredAuthUser() {
  try {
    const rawValue = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!rawValue) {
      return null;
    }

    const storedUser = JSON.parse(rawValue) as Partial<StoredAuthUser>;
    if (!isValidStoredAuthUser(storedUser) || storedUser.expiresAt <= Date.now()) {
      clearStoredAuthUser();
      return null;
    }

    return storedUser.user;
  } catch {
    clearStoredAuthUser();
    return null;
  }
}

function persistAuthUser(user: AuthUser) {
  const storedUser: StoredAuthUser = {
    version: AUTH_STORAGE_VERSION,
    expiresAt: Date.now() + AUTH_SESSION_MS,
    user,
  };

  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(storedUser));
}

function clearStoredAuthUser() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

function isValidStoredAuthUser(value: Partial<StoredAuthUser>): value is StoredAuthUser {
  return (
    value.version === AUTH_STORAGE_VERSION &&
    typeof value.expiresAt === "number" &&
    Boolean(value.user) &&
    typeof value.user?.id === "string" &&
    typeof value.user?.email === "string" &&
    typeof value.user?.name === "string" &&
    typeof value.user?.picture === "string"
  );
}

function decodeGoogleCredential(credential: string): GoogleIdTokenPayload {
  const [, payload] = credential.split(".");
  if (!payload) {
    throw new Error("Google credential is invalid.");
  }

  const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
  const paddedPayload = normalizedPayload.padEnd(
    normalizedPayload.length + ((4 - (normalizedPayload.length % 4)) % 4),
    "="
  );
  const jsonPayload = decodeURIComponent(
    Array.from(window.atob(paddedPayload))
      .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, "0")}`)
      .join("")
  );

  return JSON.parse(jsonPayload) as GoogleIdTokenPayload;
}

function buildAuthUser(payload: GoogleIdTokenPayload): AuthUser {
  if (!payload.sub || !payload.email || !payload.name) {
    throw new Error("Google profile is missing required fields.");
  }

  return {
    id: payload.sub,
    email: payload.email,
    name: payload.name,
    picture: payload.picture ?? "",
  };
}
