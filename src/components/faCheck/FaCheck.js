import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function FaCheck(props) {
  const isActive = props.isActive;

  return isActive ? <FontAwesomeIcon icon={faCheck} /> : null;

  //return <FontAwesomeIcon icon={faXmark} />;
}

export default FaCheck;
