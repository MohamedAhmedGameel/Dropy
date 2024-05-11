import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
    const contactInfo = [
        { icon: faEnvelope, text: "book.shop@gmail.com" },
        { icon: faPhone, text: "+20 12344567890" }
    ];

    return (
        <div className="flex  md:flex-row flex-col px-10 md:p-0 items-start md:items-center justify-evenly text-[12px] bg-blue-900 sm:text-[16px] sm:items-start">
            {contactInfo.map((info, index) => (
                <div key={index} className="relative sm:pl-[15px] w-fit">
                    <i className="absolute text-[20px] left-[-30px] top-1/2 transform -translate-y-1/2 text-orange-500">
                        <FontAwesomeIcon icon={info.icon} />
                    </i>
                    <p className="text-[20px] text-white ">{info.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ContactInfo;
