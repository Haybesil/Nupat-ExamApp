import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const TheoryGrid = ({ selectedQuestionIndex, onSelectQuestion }) => {
  const totalQuestions = 3;
  const [answeredQuestions, setAnsweredQuestions] = useState(
    new Array(totalQuestions).fill(false)
  );
  const [questions, setQuestions] = useState([]);
  const [objectiveCompleted, setObjectiveCompleted] = useState(false);

  const handleQuestionClick = (index) => {
    const updatedAnswers = [...answeredQuestions];
    updatedAnswers[index] = !updatedAnswers[index];
    setAnsweredQuestions(updatedAnswers);
    onSelectQuestion(index);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('API_ENDPOINT');
        const data = await response.json();
        setQuestions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setQuestions([]);
      }
    };

    const fetchObjectiveStatus = async () => {
      try {
        const response = await fetch('API_OBJECTIVE_STATUS_ENDPOINT');
        const data = await response.json();
        setObjectiveCompleted(data.completed || false);
      } catch (error) {
        console.error('Error fetching objective status:', error);
        setObjectiveCompleted(false);
      }
    };

    fetchQuestions();
    fetchObjectiveStatus();
  }, []);

  return (
    <div className="bg-[#043A3B] w-[100%] pt-[5rem] px-[5vw] h-[110vh]">
      <div className="text-white">
        <h1 className="text-[24px] font-[700] font-[Montserrat]">
          Objectives{' '}
          <span className="block text-[12px] font-[500] font-[Montserrat]">
            {objectiveCompleted ? 'Completed' : 'Not completed'}
          </span>
        </h1>
      </div>
      <div className="text-white pt-[30px]">
        <h1 className="text-[24px] font-[700] font-[Montserrat]">
          Practical{' '}
          <span className="block text-[12px] font-[500] font-[Montserrat]">
            Not completed
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-[20px] mt-[5rem]">
        <div className="text-white flex items-center justify-between">
          <h1 className="text-[24px] font-[500] font-[Montserrat]">
            Question 01{' '}
          </h1>
          <button className={`w-5 h-5 bg-blue-100`}></button>
        </div>
        <div className="text-white flex items-center justify-between">
          <h1 className="text-[24px] font-[500] font-[Montserrat]">
            Question 02{' '}
          </h1>
          <button className={`w-5 h-5 bg-blue-100`}></button>
        </div>
        <div className="text-white flex items-center justify-between">
          <h1 className="text-[24px] font-[500] font-[Montserrat]">
            Question 03{' '}
          </h1>
          <button className={`w-5 h-5 bg-blue-100`}></button>
        </div>
      </div>

      <div className="text-white p-4">
        {questions.length > 0 ? (
          <div className="grid gap-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center justify-between">
                <button
                  className={`w-full py-2 ${
                    answeredQuestions[index]
                      ? 'bg-green-400'
                      : 'bg-gray-200 hover:bg-blue-100'
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  Question {index + 1}
                </button>
                {question.completed && (
                  <span className="text-green-400 ml-2">&#10003;</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading questions...</p>
        )}

        <div className='flex justify-center mt-[40px]'>
          <Link to='/obj' className="mt-4 px-4 py-2 border border-white text-white rounded-md">
            Move back to Objectives
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link to='/pract' className="mt-4 px-4 py-2 border border-white text-white rounded-md">
            Move to Practical
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheoryGrid;
