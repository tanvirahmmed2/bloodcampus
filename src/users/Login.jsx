import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="w-full text-center min-h-screen px-4 md:px-20 flex items-center justify-center">
      <div className='w-full bg-white/20 rounded-lg flex flex-col md:flex-row items-center justify-center p-4 gap-4'>

        <div className='w-full flex flex-col items-center justify-center gap-2 '>
          <p>Donate Blood, Save Life</p>
          <p>welcome to</p>
          <h1 className='text-4xl font-bold'>Blood Campus</h1>
          <p>a huminty organization to save life</p>
          <p>Keep donating blood and save people</p>
          <Link to="/register" className='text-base italic text-red-600'>new donor?</Link>
        </div>

        <form action="" className='w-full flex flex-col items-center justify-center'>
          <div className='w-full flex flex-col p-2 gap-2 items-start'>
            <label htmlFor="email">email</label>
            <input type="email" name='email' id='name' required className='bg-red-500 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
          </div>
          <div className='w-full flex flex-col p-2 gap-2 items-start'>
            <label htmlFor="password">password</label>
            <input type="password" name='password' id='password' required className='bg-red-500 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
          </div>
          <button type='submit' className='bg-green-500 p-1 px-3 rounded-lg'>Login</button>
        </form>

      </div>

    </section>
  )
}

export default Login
