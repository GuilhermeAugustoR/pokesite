import { Player } from "@lottiefiles/react-lottie-player";
import LodingPoke from "../../assets/loading.json";

const Loading = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src={LodingPoke}
        style={{ height: "150px", width: "150px" }}
      />
    </>
  );
};

export default Loading;
