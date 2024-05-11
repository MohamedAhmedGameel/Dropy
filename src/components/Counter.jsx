
import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

    const card = 'flex items-center flex-col justify-center h-[200px] w-[220px]';
    const cardNumber = "bg-orange-500 rounded-lg text-white w-[100px] h-[100px] flex items-center justify-center";
    const cardDesc = "text-blue-900";
    return (

        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='min-h-[70vh] sm:min-h-[450px] md:max-h-[400px] max-h-fit width-screen inline-flex flex-col items-center gap-16
             overflow-hidden' id='counter'>
                <div className="w-[100%] text-center pt-10">
                    <span className="font-capriola text-[35px] text-blue-900">بعض  <span className='text-orange-500'>الأحصائيات</span></span>
                </div>
                <div className='flex justify-evenly min-h-[70%] h-fit items-center w-screen flex-wrap'>

                    <div className={card}>
                        <div className={cardNumber}>
                            <span >{counterOn && <CountUp start={0} end={21} duration={4} delay={1} />}</span>
                        </div>
                        <div className={cardDesc}>
                            <p><strong>فروع</strong></p>
                        </div>
                    </div>


                    <div className={card}>
                        <div className={cardNumber}>
                            <span>{counterOn && <CountUp start={0} end={600} duration={2} delay={1} />} +</span>
                        </div>
                        <div className={cardDesc}>
                            <p><strong>عملاء سعداء</strong></p>
                        </div>
                    </div>

                    <div className={card}>
                        <div className={cardNumber}>
                            <span>{counterOn && <CountUp start={0} end={900} duration={3} delay={1} />}K +</span>
                        </div>
                        <div className={cardDesc}>
                            <p><strong>شحنات شهريه</strong></p>
                        </div>
                    </div>


                </div>
            </div>















            {/* <div>
        <h1>
            {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>} +
        </h1>
    </div> */}
        </ScrollTrigger>
    )
}

export default Counter