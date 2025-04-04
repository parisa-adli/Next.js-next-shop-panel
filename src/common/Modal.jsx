import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import Button from "./Button";

export function Modal({ open, onClose, title, children, description = "" }) {
//   const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div
        className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-opacity-30 z-50"
      >
        <div
        //   ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div
            className="flex items-center justify-between border-b 
          border-b-secondary-300 pb-2 mb-6"
          >
            <div>
              <p className="text-secondary-700 font-bold text-base">{title}</p>
              <p className="text-secondary-400 text-sm lg:text-base">
                {description}
              </p>
            </div>
            <button onClick={onClose}>
              <IoClose className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>,
      document.body
    )
  );
}

// export function useOutsideClick(handler, listenCapturing = true) {
//   const ref = useRef();

//   useEffect(() => {
//     function handleClick(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         console.log(ref);
//         handler();
//       }
//     }

//     document.addEventListener("click", handleClick, listenCapturing);

//     return () =>
//       document.removeEventListener("click", handleClick, listenCapturing);
//   }, [open, listenCapturing]);

//   return ref;
// }

export function ConfirmDelete({ onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-secondary-700">
        آیا از حذف مطمین هستید؟
      </h2>
      <form action={onConfirm}>
        <div className="flex justify-between items-center gap-x-16">
          <Button onClick={onClose}>لغو</Button>
          <Button onClick={onConfirm} disabled={disabled}>
            حذف
          </Button>
        </div>
      </form>
    </div>
  );
}
