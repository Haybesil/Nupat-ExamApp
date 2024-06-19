import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Bro from '../../../assets/images/bro.png';

const WelcomePage = () => {
  const location = useLocation();
  const { userName = 'Guest', code = '' } = location.state || {};

  return (
    <>
      <div className='py-[20px] bg-gray-200'>
        <div className='pl-[20px] py-[40px]'>
          <h1 className="text-[32px] font-[700] font-[Montserrat]">
            Welcome {userName}!
          </h1>
        </div>
        <div className='flex justify-center'>
          <img src={Bro} alt="Bro" />
        </div>
        <div>
          <p className='text-[16px] font-[500] font-[Montserrat] text-center mx-[15vw] pt-[40px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci urna, ut efficitur est gravida at. In turpis lectus, scelerisque vitae pellentesque aliquet, ultrices at ex. Sed pellentesque, tortor id feugiat tempor, mauris nibh vestibulum erat, nec laoreet magna sem sed dolor. In hac habitasse platea dictumst.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/instruction"
            // state={{ userName, code }} try this later
            state={{ code }}
            className="bg-[#043A3B] text-white text-[16px] font-[Montserrat] font-[400] w-[9rem] rounded-md py-[10px] mt-[40px] inline-block text-center"
          >
            Proceed to exam
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
