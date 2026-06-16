import React, { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import type { Workshop } from "@/types";
import {
  mockWorkshopDetail,
  mockWorkshopDetails,
  mockWorkshops,
  type WorkshopDetailData,
} from "@/utils/mockData";

const STORAGE_KEY = "disanity.createdWorkshops.v1";

export interface WorkshopFormImage {
  id: number;
  name: string;
  url: string;
  alt: string;
}

export interface WorkshopCreateInput {
  title: string;
  category: string;
  location: string;
  artisanName: string;
  pricePerGuest: number;
  originalPrice: number;
  durationHours: number;
  guestLimit: number;
  story: string;
  includedItems: Array<{ title: string; description: string }>;
  images: WorkshopFormImage[];
}

export interface CreatedWorkshop {
  id: string;
  ownerId?: string;
  createdAt?: string;
  card: Workshop;
  detail: WorkshopDetailData;
}

interface WorkshopCatalogContextType {
  createdWorkshops: CreatedWorkshop[];
  ownedWorkshops: CreatedWorkshop[];
  allWorkshops: Workshop[];
  createWorkshop: (input: WorkshopCreateInput) => CreatedWorkshop;
  getWorkshopDetail: (workshopId: string | null) => WorkshopDetailData;
}

const WorkshopCatalogContext = createContext<WorkshopCatalogContextType | undefined>(undefined);

export const WorkshopCatalogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const ownerId = user?.id ?? "anonymous-artisan";
  const [createdWorkshops, setCreatedWorkshops] = useState<CreatedWorkshop[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CreatedWorkshop[]) : [];
    } catch {
      return [];
    }
  });

  const allWorkshops = useMemo(
    () => [...mockWorkshops, ...createdWorkshops.map((workshop) => workshop.card)],
    [createdWorkshops]
  );
  const ownedWorkshops = useMemo(
    () => createdWorkshops.filter((workshop) => workshop.ownerId === ownerId),
    [createdWorkshops, ownerId]
  );

  const persistWorkshops = (nextWorkshops: CreatedWorkshop[]) => {
    setCreatedWorkshops(nextWorkshops);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextWorkshops));
    }
  };

  const createWorkshop = (input: WorkshopCreateInput) => {
    const id = `${createSlug(input.title)}-${Date.now()}`;
    const images = input.images.length > 0 ? input.images : createFallbackImages(input.title);
    const primaryImage = images[0];
    const secondaryImage = images[1] ?? primaryImage;
    const tertiaryImage = images[2] ?? secondaryImage;
    const priceText = `${formatCurrency(input.pricePerGuest)}đ`;
    const originalPriceText = `${formatCurrency(input.originalPrice)}đ`;

    const detail: WorkshopDetailData = {
      ...mockWorkshopDetail,
      title: input.title,
      category: input.category,
      location: input.location,
      breadcrumb: `Workshop > ${input.category} > ${input.title}`,
      rating: 0,
      reviewCount: 0,
      pricePerGuest: input.pricePerGuest,
      priceText: `${priceText}/người`,
      taxText: "Đã bao gồm thuế",
      dateLabel: "Lịch trình linh hoạt",
      guestLimit: input.guestLimit,
      defaultGuestCount: 1,
      galleryImages: images.slice(0, 5).map((image, index) => ({
        src: image.url,
        alt: image.alt || input.title,
        featured: index === 0,
      })),
      quickFacts: [
        { icon: "timer", label: `${input.durationHours} giờ` },
        { icon: "languages", label: "Việt & Anh" },
        { icon: "users", label: `Tối đa ${input.guestLimit} khách` },
      ],
      introTitle: input.title,
      introSubtitle: `Trải nghiệm ${input.category} cùng ${input.artisanName}`,
      introDescription: input.story,
      introImage: secondaryImage.url,
      introImageAlt: secondaryImage.alt || input.title,
      includedHeading: "Bao gồm trong chuyến đi",
      includedDescription:
        "Những vật phẩm này sẽ được chuẩn bị sẵn để người tham gia có một buổi trải nghiệm trọn vẹn.",
      includedItems: input.includedItems,
      artisanEyebrow: "Nghệ nhân",
      artisanName: input.artisanName,
      artisanTitle: `Gặp gỡ nghệ nhân ${input.artisanName} và khám phá ${input.category}`,
      artisanDescription:
        input.story || `Nghệ nhân ${input.artisanName} sẽ trực tiếp hướng dẫn người tham gia trong workshop này.`,
      artisanImage: tertiaryImage.url,
      artisanImageAlt: tertiaryImage.alt || input.artisanName,
      artisanTraits: ["Tận tâm", "Trách nhiệm", "Gần gũi", "Kỹ thuật tốt"],
      artisanStats: [
        { value: "0", label: "Đánh giá" },
        { value: `${input.guestLimit}`, label: "Khách tối đa" },
        { value: "1", label: "Workshop" },
      ],
      reviewsHeading: "Phản hồi của khách hàng",
      reviewsDescription: "Workshop mới chưa có đánh giá từ khách hàng.",
      reviews: [],
      consultationImage: primaryImage.url,
      consultationTitle: "Cần tư vấn riêng?",
      consultationDescription:
        "Liên hệ DiSanity để được hỗ trợ thêm về lịch trình và trải nghiệm workshop này.",
    };

    const createdWorkshop: CreatedWorkshop = {
      id,
      ownerId,
      createdAt: new Date().toISOString(),
      card: {
        id,
        title: input.title,
        artist: input.artisanName,
        location: input.location,
        price: priceText,
        originalPrice: originalPriceText,
        img: primaryImage.url,
        left: 0,
        top: 0,
        fontClass: "font-jaro",
      },
      detail,
    };

    persistWorkshops([...createdWorkshops, createdWorkshop]);
    return createdWorkshop;
  };

  const getWorkshopDetail = (workshopId: string | null) => {
    const createdDetail = createdWorkshops.find((workshop) => workshop.id === workshopId)?.detail;
    return createdDetail ?? mockWorkshopDetails[workshopId ?? ""] ?? mockWorkshopDetail;
  };

  return (
    <WorkshopCatalogContext.Provider
      value={{ createdWorkshops, ownedWorkshops, allWorkshops, createWorkshop, getWorkshopDetail }}
    >
      {children}
    </WorkshopCatalogContext.Provider>
  );
};

export const useWorkshopCatalog = () => {
  const context = useContext(WorkshopCatalogContext);
  if (!context) {
    throw new Error("useWorkshopCatalog must be used within a WorkshopCatalogProvider");
  }
  return context;
};

function createSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    || "workshop";
}

function formatCurrency(value: number) {
  return value.toLocaleString("vi-VN");
}

function createFallbackImages(title: string): WorkshopFormImage[] {
  return mockWorkshopDetail.galleryImages.slice(0, 3).map((image, index) => ({
    id: index + 1,
    name: `fallback-${index + 1}`,
    url: image.src,
    alt: image.alt || title,
  }));
}
