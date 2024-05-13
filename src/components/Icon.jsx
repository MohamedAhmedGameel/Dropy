import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = () => {
  return (
    <>
      <div className="w-[150px] flex justify-between text-[30px] text-blue-900">
        <a href="https://www.facebook.com/profile.php?id=61559438555339" target="_blank" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/DropyShipping" target="_blank" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://wa.me/966531010060" target="_blank" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

      </div>
    </>
  )
}

export default Icon