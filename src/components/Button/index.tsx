import React, { ReactNode } from "react";
import style from "./Button.module.css";
type Props = {
  children: ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className={style.btn}>
      {children}
    </button>
  );
}

export default Button;
