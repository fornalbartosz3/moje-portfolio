import React from "react";

const motion = new Proxy(
  {},
  {
    get: (_target, tag: string) =>
      React.forwardRef(({ children, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }, ref: React.Ref<HTMLElement>) =>
        React.createElement(tag, { ...props, ref }, children)
      ),
  }
);

const AnimatePresence = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

export { motion, AnimatePresence };
