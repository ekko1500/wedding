import React from "react";
import styles from "../styles/img.module.scss";
import Image from "next/image";

function DefaultBlur({ src }: any) {
  return (
    <Image
      src={src}
      alt="image"
      placeholder="blur"
      width="auto"
      height="auto"
    />
  );
}

export default DefaultBlur;
