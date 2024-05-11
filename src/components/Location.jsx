
const Location = () => {
  return (
    <div className="bg-white" id='location'>
      <div className="w-[100%] text-center pt-10">
        <span className="font-capriola text-[30px] text-blue-900">Our  <span className='text-orange-500'>Location</span></span>
      </div>
      <div className="py-10 px-4 flex flex-wrap gap-6 md:gap-20 justify-evenly flex-col-reverse md:flex-row">
        <div className='border-4 rounded-xl border-orange-500 overflow-hidden w-450px max-w-[90vw] self-center'
        //   data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3622.9286317854658!2d46.779392!3d24.763636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ1JzQ5LjEiTiA0NsKwNDYnNDUuOCJF!5e0!3m2!1sar!2seg!4v1715255131026!5m2!1sar!2seg"
            width="100%"
            height="450"
            center
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className="text-blue-900 text-[40px] font-capriola "
        // data-aos="zoom-in-up"
        >Find us at <br />the heart of the city</div>
      </div>
    </div>
  )
}

export default Location;