import React from 'react'
import Form from './components/Form'

const App = () => {
  return (

    <div className='w-full h-screen bg-gray-400 flex justify-center items-center '>
      <div className='w-[80%] h-[90%] border-4  border-gray-500 bg-pink-100 rounded-xl font-medium'>
        <div className=''>
          <h1 className='text-5xl  flex justify-center items-center pt-6 text-purple-800 border-b-2 border-gray-300 pb-4'>Match Making</h1>

          <div className='flex p-16 gap-20 justify-center  item-center'>
            <Form formTitle={"Boy's Details"} />
            <Form formTitle={"Girl's Details"} />

          </div>

          <div className='flex justify-center'>
          <button className='bg-purple-800 text-white  rounded-md py-3 text-2xl flex justify-center px-40'>Match Kundali</button>

</div>
        </div>

      </div>

    </div>
  )
}

export default App