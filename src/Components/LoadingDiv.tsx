import { ReactTyped } from "react-typed";

const LoadingDiv = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="text-3xl font-medium pt-28 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
        Loading
        <ReactTyped strings={["..."]} typeSpeed={100} backSpeed={100} loop />
      </div>
    </div>
  );
};

export default LoadingDiv;
