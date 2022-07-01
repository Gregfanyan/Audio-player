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
        color: isLiked ? "#F34423" : "#000000",
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
