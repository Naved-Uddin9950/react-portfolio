import React from 'react'

function Home() {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl border rounded text-center py-2 mb-6 shadow-md dark:text-white dark:bg-gray-900 dark:border-transparent'>Home</h1>

      <div className='h-max border rounded-xl shadow-md dark:border-gray-900'>
        <div className='h-max'>
          <img
            src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Banner Image"
            className='h-48 w-full object-cover border rounded-xl shadow-lg dark:border-gray-900'
          />
        </div>

        <div className='border rounded-full w-max h-max z-2 relative bottom-16 left-44 dark:border-gray-900 shadow-md'>
          <img
            src="https://avatars.githubusercontent.com/u/119304160?v=4"
            alt="Image: Naved Uddin"
            className='w-32 h-32 border-4 border-white shadow-2xl rounded-full dark:border-gray-900'
          />
        </div>

        <p className='text-2xl font-bold relative bottom-28 left-80 w-max dark:text-white'>Naved Uddin</p>

        <div className='relative bottom-32 float-right mr-48'>
          <a 
            href='https://wa.me/917023673273'
            target='_blank'
            className='bg-white text-black border shadow-2xl rounded border-slate-500 font-bold py-1 px-3 mx-2 dark:bg-gray-900 dark:border-gray-950 dark:text-white'
          >&#128231; Message</a>
          
          <a 
            href='tel:+917023673273'
            target='_blank'
            className='bg-white text-black border shadow-2xl rounded border-slate-500 font-bold py-1 px-3 mx-2 dark:bg-gray-900 dark:border-gray-950 dark:text-white'
          >&#128222; Call</a>
        </div>
      
      </div>
    </div>
  )
}

export default Home