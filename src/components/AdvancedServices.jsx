import { faIdCard, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AdvancedServices() {
    return (
        <div className="flex justify-center min-h-screen items-center overflow-hidden pr-4">
            <div className="max-w-[1000px] flex items-center justify-between flex-col gap-14 text-blue-900">
                <span className="text-[40px] w-[100%]">
                    كما توفر دروبى
                </span>
                <div className="flex flex-col gap-10">
                    <div className="bg-white w-[90%] md:w-[70%] max-w-[1000px] rounded-lg p-2 bg-slate-100 text-blue-900 border-2 relative">
                        <i className="absolute text-[20px] top-[-33px] right-[-10px] sm:top-[-33px] sm:right-[-30px] text-orange-500 ">
                            <FontAwesomeIcon icon={faTruck} />
                        </i>
                        <span className="p-2 absolute top-[-40px] right-[20px] sm:top-[-40px] sm:right-0 rounded-md font-bold ">
                            سيارات مبردة بدون سائق
                        </span>
                        بتعدد رغبات العملاء وتنوع الأنشطة الخاصة بعملاؤنا نتميز بتوفير السيارات المبردة والمجهزة لدعم عملاء دروبي في حال الإحتياج الى سيارات إضافيه من أسطول دروبي للنقليات.
                    </div>
                    <div className="bg-white w-[90%] md:w-[70%] max-w-[1000px] rounded-lg p-2 bg-slate-100 text-blue-900 border-2 relative">

                        <i className="absolute text-[20px] top-[-33px] right-[-10px] sm:top-[-33px] sm:right-[-30px] text-orange-500 ">
                            <FontAwesomeIcon icon={faIdCard} />
                        </i>
                        <span className="p-2 absolute top-[-40px] right-[20px] sm:top-[-40px] sm:right-0 rounded-md font-bold ">
                            سيارات مبردة مع سائق
                        </span>
                        سواء كانت إحتياجات عملاؤنا محلية او في جميع أنحاء المملكه تقوم دروبي بتوفيرها, بوجود سائقين مدربين ومجهزين بكل الأوراق الرسمية لدى دروبي للنقل يسعدنا ان ندعم عملاؤنا في تلبية رغباتهم في شحن بضائعهم بأمان وبإستمرارية ورفع العبئ الخاص بالورقيات والمتابعه.

                        توفر دروبي للنقل الكفاءات والخبرات من سائقين لعملاؤنا على مدار التعاقد.

                    </div>



                </div>
            </div>
        </div>
    )
}

export default AdvancedServices