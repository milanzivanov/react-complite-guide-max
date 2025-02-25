import logoImg from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logoImg} alt="quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
export default Header;
