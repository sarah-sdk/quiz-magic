import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/quiz">Quiz</Link>
      <Link to="/couleurs">Les couleurs</Link>
    </nav>
  );
}
