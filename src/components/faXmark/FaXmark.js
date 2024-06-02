import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function FaXmark(props) {
  const isActive = props.isActive;

  return isActive ? <FontAwesomeIcon icon={faXmark} /> : null;

  //return <FontAwesomeIcon icon={faXmark} />;
}

export default FaXmark;
