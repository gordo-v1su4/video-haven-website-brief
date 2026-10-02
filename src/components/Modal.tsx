import { useLayoutEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

let scrollLocks = 0;
let previousOverflow = "";

export function Modal({ children, labelledBy, describedBy, className = "", onClose }: {
  children: ReactNode;
  labelledBy: string;
  describedBy?: string;
  className?: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    if (scrollLocks++ === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    // Native top-layer dialogs handle inertness, focus trapping, and nested Escape.
    dialog.showModal();
    return () => {
      dialog.close();
      if (--scrollLocks === 0) document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog
      ref={ref}
      className={`haven-dialog ${className}`}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      onCancel={(event) => { event.preventDefault(); event.stopPropagation(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      {children}
    </dialog>,
    document.body,
  );
}