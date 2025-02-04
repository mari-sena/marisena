import Image from "next/image";
import styles from "./index.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <Image
          alt="coming soon"
          width={259}
          height={327}
          className={styles.image}
          src="/about-me.png"
        />
      </div>
    </div>
  );
};

export default App;
