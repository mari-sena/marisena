import Image from "next/image";
import styles from "./index.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Image alt="coming soon" fill={true} className="image" src="/soon.gif" />
    </div>
  );
};

export default App;
