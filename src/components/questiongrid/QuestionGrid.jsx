import React, { useState } from 'react';

const QuestionGrid = () => {
  const totalQuestions = 60;
  const [answeredQuestions, setAnsweredQuestions] = useState(
    new Array(totalQuestions).fill(false)
  );

  const handleQuestionClick = (index) => {
    const updatedAnswers = [...answeredQuestions];
    updatedAnswers[index] = !updatedAnswers[index];
    setAnsweredQuestions(updatedAnswers);
  };

  return (
    <>
      <div className="text-center text-white  p-4">
        <p className="mb-4 ">
          {answeredQuestions.filter((answered) => answered).length} questions
          answered already
        </p>
        <div className="grid grid-cols-10 gap-x-[30px] gap-[30px] ">
          {answeredQuestions.map((answered, index) => (
            <div className="flex flex-col items-center">
              <button
                key={index}
                className="w-6 h-6 bg-gray-200  border 
            hover:bg-blue-100  "
                onClick={() => handleQuestionClick(index)}
              ></button>
              <p className="text-[12px] text-center">{index + 1}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="mt-4 px-4 py-2 border border-white   text-white rounded-md hover:bg-blue-700">
            Move to Theory
          </button>
        </div>

        <div>
          <button className="mt-4 px-4 py-2 border border-white text-white rounded-md hover:bg-blue-700">
            Move to Practical
          </button>
        </div>

        {/* ${answered ? 'bg-green-400' : 'bg-white'}  */}
      </div>
    </>
  );
};

export default QuestionGrid;
