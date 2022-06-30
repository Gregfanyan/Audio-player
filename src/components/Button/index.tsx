import React, { CSSProperties, ReactNode } from "react";
import style from "./Button.module.css";
type Props = {
  children: ReactNode;
  onClick: () => void;
  style?: CSSProperties;
  isLiked?: boolean;
};

function Button({ children, onClick, isLiked }: Props) {
  return (
    <button
      style={{
        color: isLiked ? "rgba(171, 2, 26, 0.95)" : "inherit",
        ...style,
      }}
      onClick={onClick}
      className={style.btn}
    >
      {children}
    </button>
  );
}

export default Button;
