import React from 'react'
import QuestionGrid from '../../questiongrid/QuestionGrid'

const ObjPage = () => {
  return (
    <>
        <div className='flex w-[100%] h-screen'>
            <div className='bg-[#043A3B] w-[40%] pt-[5rem] px-[5vw] h-[110vh]'>
               <QuestionGrid/>
            </div>

            <div className='flex flex-col gap-[9rem] pl-[30px] bg-gray-200 w-[60%] h-[110vh]'></div>
        </div>
    </>
  )
}

export default ObjPage