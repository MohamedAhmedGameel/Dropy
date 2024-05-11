import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = () => {
  return (
    <>
      <div className="w-[150px] flex justify-between text-[30px] text-blue-900">
        <a href="#" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

      </div>
    </>
  )
}

export default Icon