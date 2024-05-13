import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (values, e) => {
    e.preventDefault();

    const { customer, email, message } = values;

    emailjs.send('service_bdv013g', 'template_y4wgai7', {
      user_name: customer,
      message: message,
      user_eamil: email,
    }, 'MCXYN1narHDCj_5dp')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const formik = useFormik({
    initialValues: {
      customer: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      customer: Yup.string().required('Full Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string().required('message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values, event);
      resetForm();
    },
  });

  return (
    <div className="h-fit bg-gray-200 flex gap-10 pt-5 pb-5 flex-col items-center" id="messages">
      <div className="w-[100%] text-center pt-10">
        <span className="font-capriola text-[35px] text-blue-900">تواصل  <span className='text-orange-500'>معنا</span></span>
      </div>
      <div className="flex w-screen justify-evenly flex-wrap px-4 py-5 gap-10">
        <div className="text-blue-900  text-[30px] gap-0 font-capriola h-[100%] flex flex-col justify-between items-center">
          <span>إستمرار دروبي للنقليات في التميز هي أولويتنا دائماَ</span>
        </div>
        <div className="box rounded overflow-hidden w-80 max-w-full flex items-center justify-center relative after:w-[170px] bg-white after:h-[200%] after:bg-blue-600 after:absolute z-10 after:z-[-1]">
          <form ref={form} onSubmit={formik.handleSubmit} className="bg-white p-6 rounded shadow-md w-[99%] h-[99%]">
            <div className="mb-4">
              <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
                الأسم
              </label>
              <input
                id="customer"
                name="customer"
                type="text"
                placeholder="الأسم"
                className={`block w-full mt-1 p-3 rounded border ${formik.errors.customer && formik.touched.customer ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring focus:ring-blue-300`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.customer}
              />
              {formik.touched.customer && formik.errors.customer && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.customer}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                البريد الإلكترونى
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="البريد الإلكترونى"
                className={`block w-full mt-1 p-3 rounded border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring focus:ring-blue-300`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                الرساله
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="الرساله"
                className={`block w-full mt-1 p-3 rounded border ${formik.errors.message && formik.touched.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring focus:ring-blue-300`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 duration-1000"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
