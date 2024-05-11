import { Link } from "react-scroll";

function Landing() {

    return (
        <div>
            <div className="relative h-screen bg-cover bg-center bg-[url('/src/assets/image2.png')] bg-fixed">
                <div className="absolute inset-0 text-center z-10 bg-black bg-opacity-30 flex items-center justify-center flex-col">
                    <h1 className=" text-[30px]  text-white font-bold md:text-4xl lg:text-5xl xl:text-[40px] lg:mb-3 max-w-[90%]">مرحبا بك فى دروبى</h1>
                    <p className="mt-1 xl:w-fit text-[18px] text-white  md:text-[18px] lg:text-[20px] lg-w-3/5  mb-4 md:mb-8 lg:mb-12 max-w-[90%]">مؤسسة وطنية سعودية  تقدم  خدمات النقل البري  للمنتجات والبضائع  وجميع الخدمات اللوجيستية عبر أنحاء المملكة</p>
                    <Link to="counter" activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500} className="cursor-pointer px-5 py-2 border-[3px] border-solid border-orange-600 rounded-md bg-orange-600 text-white text-[15px] font-bold hover:bg-white hover:text-orange-600 transition-colors duration-300 md:text-[20px]">المزيد! </Link>
                </div>
            </div>
        </div>
    )
}


export default Landing;