import React from 'react'

const Form = ({ formTitle }) => {
    return (
        <div className='w-1/2'>

            <form action="" className='bg-white p-4 rounded-md shadow-lg' >

                <h1 className='text-3xl flex justify-center'>{formTitle}</h1>
                <div className='outline-none'>
                    <div className='text-xl font-medium flex flex-col '>
                        <label htmlFor="name">Name</label>
                        <input className='outline-none border-[1px] border-black w-[60%] shadow-lg  pl-4  rounded-md' type="text" placeholder='Enter your name ' />
                    </div>
                    <div className='text-xl mt-2 flex flex-col'>
                        <label htmlFor="date">Birth Date</label>
                        <input className='outline-none border-[1px] border-black w-[60%] shadow-lg  pl-4  rounded-md' type="text" placeholder='DD/MM/YYYY ' />
                    </div>
                    <div className='text-xl mt-2  flex flex-col '>
                        <label htmlFor="time">Birth Time</label>
                        <input className=' outline-none border-[1px] border-black w-[60%] shadow-lg  pl-4  rounded-md' type="text" placeholder='hh:mm (24 hours)' />
                    </div>
                    <div className=' pl-5 mt-2  text-xl gap-2 flex'>
                        <input className='' type="checkbox" />
                        <p>Don't know my exact time of birth</p>
                    </div>

                    <div className='text-xl mt-2  flex flex-col '>
                        <label htmlFor="place">Birth Place</label>
                        <input className='outline-none border-[1px] border-black w-[60%] shadow-lg  pl-4  rounded-md' type="text" placeholder='Enter birth city name  ' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form