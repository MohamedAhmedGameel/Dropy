import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function About() {
    return (
        <div className="min-h-screen py-12 bg-gray-200 flex flex-col gap-10 justify-evenly items-center">
            <div className="bg-white w-[90%] md:w-[70%] max-w-[1000px] rounded-lg p-2 border-blue-900 text-blue-900 border-2 relative"> <span className="p-2 absolute top-[-30px] right-0 bg-orange-500 text-white rounded-md">
                معلومات عن دروبي
            </span>مؤسسة وطنية سعودية تقدم خدمات النقل البري للمنتجات والبضائع وجميع الخدمات اللوجيستية عبر أنحاء المملكة, بترخيص رقم 11/00017407
                وسجل تجاري رقم:1010630073

                .مؤسسة دروبي للنقليات هي رائدة النقل البري المميزة في المملكة, حيث نقدم خدمات نقل آمنة وموثوقة لجميع المنتجات والبضائع بأحجام وأشكال مختلفة (مجمدة، مبردة، سائلة) عبر أسطول حديث من الشاحنات يقودها سائقون محترفون ومدربون، كل ذلك وفق أعلى معايير الدقة والمهنية مع الحرص على متابعة قوانين النقل وتزويد عملائنا بالوثائق اللازمة لتسهيل عمليات الشحن.

            </div>
            <div className="bg-white  w-[90%] md:w-[70%] max-w-[1000px] rounded-full p-2 border-blue-900 text-blue-900 border-2 flex items-center gap-2 sm:gap-4 md:gap-5">
                <span className="bg-orange-500 min-w-16 min-h-16 h-[100%] rounded-full flex justify-center items-center text-white"><FontAwesomeIcon icon={faEye} /></span>
                <div>تقديم منظومة متكاملة في نقل البضائع والسلع  لأكبر عدد من العملاء , مع توفير البيئة الأنسب سعرا والأعلى كفاءة في الخدمات اللوجيستية</div>
            </div>

            <div className="bg-white  w-[90%] md:w-[70%] max-w-[1000px] rounded-full p-2 border-blue-900 text-blue-900 border-2 flex items-center gap-2 sm:gap-4 md:gap-5">
                <span className="bg-orange-500 min-w-16 min-h-16 h-[100%] rounded-full flex justify-center items-center text-white"><FontAwesomeIcon icon={faEnvelope} /></span>
                <div>إستمرار دعم العملاء في نقل البضائع ومتابعتها بمنظومة مداره بأعلى درجات الكفائة والإحترافية, من خلال توفير التكنولوجيا اللازمة والأيدي العامله والسائقين المهره مع نظام إداري متميز.</div>
            </div>

            <div className="bg-white w-[90%] md:w-[70%] max-w-[1000px] rounded-lg p-2 border-blue-900 text-blue-900 border-2 relative"> <span className="p-2 absolute top-[-30px] right-0 bg-orange-500 text-white rounded-md">
                عملاؤنا
            </span>
                <ul className='list-[circle] leading-8 pr-5'>
                    <li>
                        جهات حكومية
                    </li>
                    <li>
                        سلاسل توريد (هايبر) محلية وعالمية
                    </li>
                    <li>
                        مصانع ومخازن أدوية
                    </li>
                    <li>
                        مطاعم ومخازن  أطعمه
                    </li>
                    <li>
                        مؤسسات ومحلات ومنافذ بيع وتجزئه
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default About