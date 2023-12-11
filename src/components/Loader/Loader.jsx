import { Backdrop } from "./Loader.styled";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Backdrop>
      <Oval
        height={80}
        width={80}
        color={"var(--accent)"}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="var(--accentActive)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Backdrop>
  );
};

export default Loader;
