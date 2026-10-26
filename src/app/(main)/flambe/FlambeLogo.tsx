import { Yesteryear } from "next/font/google";

import styles from "./FlambeLogo.module.css";

const yesteryear = Yesteryear({ weight: "400", subsets: ["latin"] });

export default function FlambeLogo({ size = 64 }: { size?: number }) {
  return (
    <h1 className={`${styles.logo} ${yesteryear.className}`} style={{ fontSize: size }}>
      flamb<span className={styles.accent}>é</span>
    </h1>
  );
}
