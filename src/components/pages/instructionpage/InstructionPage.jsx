import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ObjectiveQuestions from '../../questionpage/QuestionPage';
import TheoryQuestion from '../../theoryquestion/TheoryQuestion';

const InstructionPage = ({code}) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchQuestions = async (type) => {
    setLoading(true);
    try {
      let response;
      if (type === 'objective') {
        response = await axios.get(
          `http://davidphenom.pythonanywhere.com/get-objquestion/${code}`
        );
      } else if (type === 'theory') {
        response = await axios.get(
          `http://davidphenom.pythonanywhere.com/get-theoryquestion/${code}`
        );
      }
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${type} questions:`, error);
      setError(`Failed to fetch ${type} questions. Please try again.`);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex w-[100%] h-screen">
        <div className="flex flex-col gap-[9rem] pl-[30px] bg-gray-200 w-[50%] h-screen">
          <div className="pt-[60px]">
            <h1 className="text-[24px] text-[#043A3B] font-[600] font-[Montserrat]">
              JAVASCRIPT Exam for May Cohort
            </h1>
          </div>

          <div>
            <h1 className="text-[24px] font-[600] font-[Montserrat] text-[#043A3B]">
              Instructions:
            </h1>
            <ul>
              <li className="list">You have 2 hours to complete your exam.</li>
              <li className="list">
                Ensure to answer all questions correctly.
              </li>
              <li className="list">Be conscious of the time as you go.</li>
              <li className="list">
                Do not forget to submit before the timer goes off.
              </li>
            </ul>
          </div>

          <div className="pt-[60px]">
            <h1 className="text-[24px] text-[#043A3B] font-[600] font-[Montserrat]">
              GoodLuck!
            </h1>
          </div>
        </div>

        <div className="bg-[#043A3B] w-[50%] pt-[15rem] px-[5vw] h-screen">
          <div>
            <Link to="/obj">
              <p className="ques">Objective</p>
            </Link>
            <Link to="/theory">
              <p className="ques">Theory</p>
            </Link>
            <Link to="/pract">
              <p className="ques">Practical</p>
            </Link>
            
            
            <>
            <Routes>
              {/* <Route path="/obj" element={<ObjectiveQuestions fetchQuestions={handleFetchQuestions} />} />
              <Route path="/theory" element={<TheoryQuestion fetchQuestions={handleFetchQuestions} />} /> */}
              <Route path="/obj" element={<ObjectiveQuestions onClick={handleFetchQuestions} />} />
              <Route path="/theory" element={<TheoryQuestion onClick={handleFetchQuestions} />} />
            </Routes>
          </>

          {loading && <p className="text-white mt-2">Loading questions...</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructionPage;
