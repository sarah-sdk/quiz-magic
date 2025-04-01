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

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(selectedAnswer);
  };

  if (!questions) return <div>Chargement...</div>;
  return (
    <main>
      <h1>Quel deck es-tu ?</h1>

      <form onSubmit={handleSubmit}>
        <h2>{questions[currentIndex].question}</h2>
        {questions[currentIndex].answers.map((answer) => (
          <div key={answer.letter}>
            <label htmlFor={answer.letter}>
              <input
                type="radio"
                name="answer"
                id={answer.letter}
                value={answer.letter}
                checked={selectedAnswer[currentIndex] === answer.letter}
                onChange={handleAnswerChange}
              />
              {answer.text}
            </label>
          </div>
        ))}

        {currentIndex > 0 && (
          <button type="button" onClick={handlePreviousClick}>
            Précédent
          </button>
        )}

        {currentIndex === questions.length - 1 && (
          <button type="submit">Valider le questionnaire</button>
        )}
      </form>
    </main>
  );
}
