import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FaHeart color="red" size={20} onClick={toggle} />;
  return <CiHeart size={20} onClick={toggle} />;
};

export default Like;
