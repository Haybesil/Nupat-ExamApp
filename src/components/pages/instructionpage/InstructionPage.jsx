import React from 'react'
import { Link } from 'react-router-dom'

const InstructionPage = () => {
  return (
    <>
        <div className='flex w-[100%] h-screen'>
           <div className='flex flex-col gap-[9rem] pl-[30px] bg-gray-200 w-[50%] h-screen'>
             <div className='pt-[60px]'>
                <h1 className='text-[24px] text-[#043A3B] font-[600] font-[Montserrat]'>JAVASCRIPT Exam for May Cohort</h1>
             </div>

             <div>
                <h1 className='text-[24px] font-[600] font-[Montserrat] text-[#043A3B]'>Instructions:</h1>
                <ul>
                    <li className='list'>You have 2 hours to complete your exam.</li>
                    <li className='list'>Ensure to answer all questions correctly.</li>
                    <li className='list'>Be conscious of the time as you go.</li>
                    <li className='list'>Do not forget to submit before the timer goes off.</li> 
                </ul>
             </div>

             <div className='pt-[60px]'>
                <h1 className='text-[24px] text-[#043A3B] font-[600] font-[Montserrat]'>GoodLuck!</h1>
             </div>
           </div>
           <div className='bg-[#043A3B] w-[50%] pt-[15rem] px-[5vw] h-screen'>
                 <div>
                    <Link to='/obj'><p className="ques">Objective</p></Link>
                    <p className='ques'>Theory</p>
                    <p className='ques'>Practical</p>
                 </div>
           </div>
        </div>
    </>
  )
}

export default InstructionPage