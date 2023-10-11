import { BallTriangle } from "react-loader-spinner";
import { Box } from "./Loader.styled";

const Loader = () => {
  return (
    <Box>
      <BallTriangle
        height="150"
        width="150"
        radius={5}
        color="#3470FF"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{ position: "absolute", bottom: "40%", right: "44.5%" }}
        visible={true}
      />
    </Box>
  );
};

export default Loader;
