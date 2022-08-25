import React from 'react';
import { useFormik } from 'formik';

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className='flex bg-gradient-to-r to-blue-300 from-blue-500 items-center justify-center w-11/12'>
      <div className='flex bg-gradient-to-r rounded-l-lg to-blue-500 from-white items-center w-3/12 h-3/4'>

      </div>
      <div className="flex flex-col p-6 rounded-r-lg shadow-lg h-3/4 bg-white w-8/12">
        <div className='flex justify-center pb-9'>
          <h1 className='text-3xl text-blue-500'>Sign In</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp123" placeholder="First name" />
            </div>
            <div className="form-group mb-6">
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp124" placeholder="Last name" />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address" />
          </div>
          <div className="form-group mb-6">
            <input id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password" />
          </div>

          <button
            className="
      w-full
      px-6
      py-2.5
      bg-blue-400
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
