// import { ProgressBar } from "react-loader-spinner";

// const Loader = () => {
//   return (
//     <ProgressBar
//       visible={true}
//       height="80"
//       width="80"
//       color="#4fa94d"
//       ariaLabel="progress-bar-loading"
//       wrapperStyle={{}}
//       wrapperClass=""
//     />
//   );
// };

//export default Loader;

//import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";
export default function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#ccc"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
