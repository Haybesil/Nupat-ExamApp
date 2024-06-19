import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ObjectiveQuestions = ({ fetchQuestions }) => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInitialQuestions();
  }, []);

  const fetchInitialQuestions = async () => {
    setLoading(true);
    try {
      const questionsData = await fetchQuestions('obj'); // Fetching objective questions
      setQuestions(questionsData.questions);
      setTotalQuestions(questionsData.total);
      setSelectedQuestionIndex(0);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError(`Failed to fetch questions: ${error.message}`); // Provide more specific error message
      setLoading(false);
    }
  };

  const fetchQuestion = async (index) => {
    try {
      const response = await axios.get(`http://davidphenom.pythonanywhere.com/get-objquestion/${index}`);
      return response.data.question; // Assuming response.data.question is an object with question and options
    } catch (error) {
      console.error('Error fetching question:', error);
      throw new Error('Failed to fetch question. Please try again.');
    }
  };

  const handleAnswer = async (questionId, option) => {
    try {
      const response = await axios.post(`http://davidphenom.pythonanywhere.com/answer-objquestion/${questionId}`, {
        picked: option,
      });
      console.log('Answer submitted:', response.data);
      // Handle answer submission logic if needed
    } catch (error) {
      console.error('Error answering question:', error);
    }
  };

  const handleNext = async () => {
    if (selectedQuestionIndex < totalQuestions - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
      if (!questions[selectedQuestionIndex + 1]) {
        try {
          const nextQuestion = await fetchQuestion(selectedQuestionIndex + 1);
          setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[selectedQuestionIndex + 1] = nextQuestion;
            return updatedQuestions;
          });
        } catch (error) {
          console.error('Error fetching next question:', error);
        }
      }
    }
  };

  const handlePrev = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!questions[selectedQuestionIndex]) {
    return <div>No question available.</div>;
  }

  const currentQuestion = questions[selectedQuestionIndex];

  return (
    <div className="w-2/3 p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium">Exam: JavaScript</p>
        <p className="text-lg font-medium">Status: Not completed</p>
        <p className="text-lg font-medium">Time left: 01:24:35</p>
      </div>
      <div className="p-4 mb-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Question {selectedQuestionIndex + 1}</h2>
        <p className="mt-2">{currentQuestion.question}</p>
        <div className="mt-4 space-y-2">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`option-${selectedQuestionIndex}-${index}`}
                name={`question-${selectedQuestionIndex}`}
                value={option}
                className="mr-2"
                onClick={() => handleAnswer(currentQuestion.id, option)}
              />
              <label htmlFor={`option-${selectedQuestionIndex}-${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
        <p className="mt-4">Point: 1</p>
      </div>
      <div className="flex justify-between mt-4">
        {selectedQuestionIndex > 0 && (
          <button onClick={handlePrev} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            Previous
          </button>
        )}
        {selectedQuestionIndex < totalQuestions - 1 && (
          <button onClick={handleNext} className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ObjectiveQuestions;
