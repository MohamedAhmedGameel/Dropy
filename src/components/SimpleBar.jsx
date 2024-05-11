
import Icon from './Icon'

const SimpleBar = () => {
  return (
    <div className='w-screen bg-gray-200 py-10 text-blue-900 text-center flex flex-col justify-center items-center'>
      <h1 className='text-[30px] font-bold'>ماذا يجعلنا الأفضل</h1>
      <div className='max-w-[1000px]'>
        <div className='max-w-[90vw]'>

          تميزت دروبي للنقليات بجودة أسطولنا من السيارات في جميع انحاء الممكله, كما تميزت بجودة متابعة السيارات الخاصة بها, من صيانة دورية, توفير بدائل في حال صيانة السيارة, عمل فحص دوري للأسطول, توفير نظام متابعة صيانة السيارة والذي يدعم التنبيه بموعد الصيانة القادم.

        </div><br />
        <span className='font-bold text-[23px]'>تواصل معنا</span>
        <div className='flex justify-center'>
          <Icon />
        </div>

      </div>
    </div >
  )
}

export default SimpleBar