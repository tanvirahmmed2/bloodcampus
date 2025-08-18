import React from 'react'
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <section className='w-full min-h-screen h-auto p-2 flex items-center justify-center'>
      <div className=' w-full h-auto flex flex-col bg-white/10 rounded-lg items-center justify-center p-4'>
        <p>Donate blood, save life</p>
        <h1 className='text-3xl font-bold'>Become a donor</h1>
        <p>Stay healthy & donate blood</p>

        <Link to="/login" className=' text-red-900 italic my-4'>Already a donor?</Link>


        <form action="" className='w-full flex-col flex items-center justify-center gap-2 px-4 md:px-20 lg:px-48'>

          <div className='w-full flex flex-col p-2 gap-2 items-start'>
            <label htmlFor="name" className='italic'>name</label>
            <input type="text" name='name' id='name' required className='bg-red-900 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
          </div>

          <div className='w-full flex flex-col p-2 gap-2 items-start'>
            <label htmlFor="email" className='italic'>email</label>
            <input type="email" name='email' id='name' required className='bg-red-900 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
          </div>

          <div className='w-full flex flex-row items-center justify-center gap-2'>

            <div className='w-full flex flex-col p-2 gap-2 items-start'>
              <label htmlFor="bloodgroup" className='italic'>blood group</label>
              <input type="text" name='bloodgroup' id='bloodgroup' required className='bg-red-900 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
            </div>

            <div className='w-full flex flex-col p-2 gap-2 items-start'>
              <label htmlFor="dateofbirth" className='italic'>date of birth</label>
              <input type="date" name='dateofbirth' id='dateofbirth' required className='bg-red-900 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
            </div>

          </div>
          
          
          
          
          <div className='w-full flex flex-col p-2 gap-2 items-start'>
            <label htmlFor="phone" className='italic'>phone</label>
            <input type="text" name='phone' id='phone' placeholder='+880' required className='bg-red-900 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
          </div>
          
          <div className='w-full flex flex-col p-2 gap-2 items-start'>
            <label htmlFor="district" className='italic'>district</label>
            <input type="text" name='district' id='district' required className='bg-red-900 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
          </div>
          
          <div className='w-full flex flex-col p-2 gap-2 items-start'>
            <label htmlFor="password" className='italic'>password</label>
            <input type="password" name='password' id='password' required className='bg-red-900 bg-opacity-15 rounded-lg px-2 p-1 w-full outline-none' />
          </div>
          
          <button type='submit' className='p-1 px-3 bg-green-500 rounded-lg'>Register</button>
        </form>


      </div>

    </section>
  )
}

export default Register
