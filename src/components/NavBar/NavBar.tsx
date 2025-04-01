import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex h-20 items-center justify-end gap-5 pr-2 mb-3 text-xl font-bold">
      <Link to="/quiz">Quiz</Link>
      <Link to="/couleurs">Les couleurs</Link>
    </nav>
  );
}
