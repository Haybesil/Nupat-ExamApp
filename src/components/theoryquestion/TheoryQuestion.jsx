import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TheoryQuestion = ({ fetchQuestions }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const [theoryAnswer, setTheoryAnswer] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchQuestions('theory'); // Passing 'theory' to specify theory questions
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching question:', error);
      }
    };

    fetchData();
  }, [fetchQuestions]);

  const handleAnswer = async () => {
    try {
      const response = await axios.post(`http://davidphenom.pythonanywhere.com/answer-theoryquestion/${data.id}`, {
        picked: theoryAnswer,
      });
      setRedirect(response.data.redirect);
    } catch (error) {
      setError(error);
      console.error('Error answering question:', error);
    }
  };

  if (redirect) {
    window.location.href = redirect;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
        <br />
        {error.response && <pre>{JSON.stringify(error.response.data, null, 2)}</pre>}
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 font-[Montserrat]">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[16px] font-[600]">Exam</h2>
          <h1 className="text-[16px] font-[600]">JavaScript</h1>
        </div>
        <div className="text-[18px] font-[600]">
          <h2>Status</h2>
          <h1>Not completed</h1>
        </div>
        <div className="text-[18px] font-[600]">
          <h2>Time left</h2>
          <h1>01:24:35</h1>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mt-[5rem]">
        <h2 className="text-[18px] text-[#043A3B] font-[600] font-[Montserrat] mb-4">
          {data.title}
        </h2>
        <h1 className="text-[16px] font-[500] font-[Montserrat] mb-6 pl-[15px] bg-gray-200 p-2 rounded-2xl">
          {data.question}
        </h1>
        <textarea
          onChange={(e) => setTheoryAnswer(e.target.value)}
          placeholder="Type your answer here"
          className="mt-4 w-full p-2 border rounded"
          value={theoryAnswer}
        />
        <button
          onClick={handleAnswer}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default TheoryQuestion;
