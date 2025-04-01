import { type ChangeEvent, type FormEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";

type QuestionType = {
  id: number;
  question: string;
  answers: { letter: "string"; text: "string" }[];
};

export default function QuizPage() {
  const questions = useLoaderData() as QuestionType[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Record<number, string>>(
    {},
  );

  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [currentIndex]: event.target.value,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(selectedAnswer);
  };

  if (!questions) return <div>Chargement...</div>;
  return (
    <main className="flex flex-col items-center justify-center gap-2 mx-auto max-w-lg p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg text-white">
      <h1>Quel deck es-tu ?</h1>

      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="text-xl font-bold mb-4">
          {questions[currentIndex].question}
        </h2>
        {questions[currentIndex].answers.map((answer) => (
          <div key={answer.letter} className="space-y-2">
            <label
              htmlFor={answer.letter}
              className="flex items-center gap-2 bg-white/5 p-2 rounded-md hover:bg-white/10 cursor-pointer mb-px"
            >
              <input
                type="radio"
                name={`answer-${currentIndex}`}
                id={answer.letter}
                value={answer.letter}
                checked={selectedAnswer[currentIndex] === answer.letter}
                onChange={handleAnswerChange}
              />
              {answer.text}
            </label>
          </div>
        ))}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePreviousQuestion}
            disabled={currentIndex === 0}
            className="mt-4 px-4 py-2 text-white-700 border border-gray-500 rounded-md hover:text-white-900 hover:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            ←
          </button>

          {currentIndex !== questions.length - 1 ? (
            <button
              type="button"
              onClick={handleNextQuestion}
              disabled={!selectedAnswer[currentIndex]}
              className={`mt-4 px-4 py-2 rounded-md text-white 
        ${selectedAnswer[currentIndex] ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}
      `}
            >
              Valider
            </button>
          ) : (
            <button
              type="submit"
              disabled={Object.keys(selectedAnswer).length !== questions.length}
              className={`mt-4 px-4 py-2 rounded-md text-white transition-all duration-200
    ${Object.keys(selectedAnswer).length === questions.length ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}
  `}
            >
              Terminer le quiz
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
