
import Icon from './Icon'

const SimpleBar = () => {
  return (
    <div className='w-screen bg-gray-200 py-10 text-blue-900 text-center'>
      <h1 className='text-[30px]'>What Makes Us Special</h1>
      <div>
        <span >
          Customer satisfaction is at the core of our business,
          and we maintain the highest level of service and quality
        </span><br />
        <button >
          <a href='/contactUs' >Contact Us</a>
        </button>
        <div className='w-screen flex justify-center'>
          <Icon />
        </div>

      </div>
    </div>
  )
}

export default SimpleBar