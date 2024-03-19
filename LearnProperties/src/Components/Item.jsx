import styles from "./Item.module.css";

const Item = ({ healthyItem }) => {
  console.log(healthyItem);  // Check if healthyItem is passed correctly
  return (
    <li className={`${styles.myitem} list-group-item`}>
      <span className={styles.mySpan}>{healthyItem}</span>
    </li>
  );
};
