import { useEffect, useState } from "react";
import "./App.css";

type QuestionType = {
  id: number;
  question: string;
  answers: string;
};

function App() {
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error(error));
  }, []);

  if (!questions) return <div>Chargement...</div>;
  return (
    <>
      <h1 className="text-3xl font-bold underline">Quiz Magic</h1>
      <p>Quel deck es-tu ?</p>
      {questions.map((question) => (
        <p key={question.id}>{question.question}</p>
      ))}
    </>
  );
}

export default App;
