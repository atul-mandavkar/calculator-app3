import {Textfit} from "react-textfit";
import "./Screen.css";


// for textfit to install by cmd type npm i react-textfit --legacy-peer-deps

const Screen = ({value}) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
}



export default Screen;