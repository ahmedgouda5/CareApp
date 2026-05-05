import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredSectionProps = {
  children: ReactNode;
  fallback: ReactNode;
  rootMargin?: string;
  minHeightClassName?: string;
};

export function DeferredSection({
  children,
  fallback,
  rootMargin = "240px",
  minHeightClassName = "min-h-[300px]",
}: DeferredSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect();
        }
      },
      { rootMargin },
    );

    observerRef.current.observe(node);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} className={minHeightClassName}>
      {isVisible ? children : fallback}
    </div>
  );
}
