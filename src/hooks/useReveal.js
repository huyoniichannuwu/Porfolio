import { useEffect, useRef, useState } from "react";

/**
 * Hook tạo hiệu ứng "xuất hiện" nhẹ nhàng khi phần tử được cuộn tới,
 * dùng IntersectionObserver thay vì lắng nghe sự kiện scroll trực tiếp
 * để tối ưu hiệu năng. Chỉ kích hoạt một lần cho mỗi phần tử.
 */
export const useReveal = (threshold = 0.15) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { elementRef, isVisible };
};
