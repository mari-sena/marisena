import "./loading.css";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <Image
        alt="loading"
        className="img"
        unoptimized
        width={100}
        height={100}
        src="/loading-dog.gif"
      />
      <p>Em construção...</p>
    </div>
  );
};

export default Loading;
