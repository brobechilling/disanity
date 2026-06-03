import { useNavigate } from 'react-router-dom';

export const useViewTransition = () => {
  const navigate = useNavigate();

  const transitionTo = (to: string) => {
    // Check if browser supports View Transitions API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to);
      });
    } else {
      navigate(to);
    }
  };

  return { transitionTo };
};
