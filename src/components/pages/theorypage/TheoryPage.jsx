import React from 'react'
import TheoryGrid from '../../questiongridthoery/TheoryGrid'
import TheoryQuestion from '../../theoryquestion/TheoryQuestion'

const TheoryPage = () => {
  return (
    <div className='flex w-[100%] h-screen'>
       <div className='bg-[#043A3B] w-[40%] pt-[5rem] px-[5vw] h-[170vh]'>
            <TheoryGrid/>
        </div>
        <div className='flex flex-col gap-[9rem] pl-[30px] bg-gray-200 w-[60%] h-[170vh] pt-[9rem]'>
            <TheoryQuestion/>
        </div>
    </div>
  )
}

export default TheoryPage