import styles from "@/styles/dashboard.module.css";
import Item1 from "@/components/Item1";
import Item2 from "@/components/Item2";
import Item3 from "@/components/Item3";

export default function Dashboard() {
  return (
    <div className={styles.section}>
      <div className={styles.gridContainer}>
        <Item1 />

        <Item2 />
      </div>

      <Item3 />
    </div>
  );
}
