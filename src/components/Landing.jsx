import { Link } from "react-scroll";

function Landing() {

    return (
        <div>
            <div className="relative h-screen bg-cover bg-center bg-[url('/src/assets/image2.png')] bg-fixed">
                <div className="absolute inset-0 text-center z-10 bg-black bg-opacity-30 flex items-center justify-center flex-col">
                    <h1 className=" text-[25px] sm:text-4xl text-white font-bold md:text-4xl lg:text-5xl xl:text-[40px] lg:mb-3 max-w-[90%]">Welcome to dropy transportation</h1>
                    <p className="mt-1 w-1/2 xl:w-fit text-[10px] text-white sm:text-[15px] md:text-[18px] lg:text-[20px] lg-w-3/5  mb-4 md:mb-8 lg:mb-12 max-w-[90%]">A Saudi national institution offers comprehensive land transportation and logistics services across the Kingdom.</p>
                    <Link to="counter" activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500} className="cursor-pointer px-8 py-3 border-[3px] border-solid border-orange-600 rounded-3xl bg-orange-600 text-white text-[15px] font-bold hover:bg-white hover:text-orange-600 transition-colors duration-300 md:text-[20px]">DISCOVER NOW!</Link>
                </div>
            </div>
        </div>
    )
}


export default Landing;