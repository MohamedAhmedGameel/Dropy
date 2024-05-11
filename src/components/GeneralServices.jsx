import Crew from "/src/assets/Crew.jpg";
function GeneralServices() {

    return (
        <div className="flex justify-center min-h-screen bg-gray-200 items-center">
            <div className="max-w-[1000px] flex items-center justify-between flex-wrap flex-row gap-10">
                <div className="flex flex-col gap-6 w-[95%] pr-4 md:w-[55%] text-blue-900">
                    <span className="text-[40px]">
                        خدمات دروبي للنقليات
                    </span>
                    <span className="bg-white rounded-md  p-6 leading-8">
                        نقدم خدمات نقل مبرد متميزة تشمل النقل البري والتوصيل داخل المملكة.
                        كما نفخر بأسطول متطور من السيارات المجهزة بأحدث التقنيات للتبريد، مما يضمن الحفاظ على سلامة وجودة البضائع.

                        بغض النظر عن نوع البضائع التي تحتاج إلى نقلها مهما كانت بضائعك، سواء كانت مواد غذائية تحتاج إلى الحفاظ على درجات حرارة معينة أو بضائع تحتاج إلى النقل بأمان، فإن فريقنا المدرب يضمن لك الاهتمام بأدق التفاصيل.

                        يتنوع عملاؤنا من موردي الورود، الشيكولاتة، الحلويات، المواد الغذائية المجمدة والمبردة, مصانع الأدوية وغيرها من البضائع الحساسة. نحن هنا لنجعل تجربة النقل أمرًا مريحًا وموثوقًا به لك ولعملك

                    </span>
                </div>
                <div className="h-[100%] flex items-center w-[30%] min-w-[250px] mx-auto md:m-0 ">
                    <img src={Crew} className="w-[250px] rounded-lg h-[175px] sm:w-[300px] sm:h-[200px] md:w-[100%] md:h-auto border-2 border-orange-500" alt="Services" />
                </div>

            </div>
        </div>
    )
}

export default GeneralServices