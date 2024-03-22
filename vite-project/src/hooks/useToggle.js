import { useState } from "react";

const useToggle = (intialState = true) => {
  const [visible, setVisible] = useState(intialState);

  const toggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return [visible, toggle];
};

export default useToggle;
