import { useState } from "react";

const LearningUseState = () => {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decreaseCounter() {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  }

  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      <h1 className="text-4xl font-bold">{counter}</h1>
      <div className="space-x-2">
        <button
          onClick={increaseCounter}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={decreaseCounter}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default LearningUseState;
