import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { useQuestions } from "./hooks/useQuestions";
import Popup from './components/Popup';
import { usePunitions } from "./hooks/usePunitions";

function App() {
    const {getRandomQuestion, randomQuestion, resetRandomQuestion, questionsAlreadyUsed, resetQuestions, questions} = useQuestions();
    const {getRandomPunition, randomPunition, resetRandomPunition, punitionsAlreadyUsed, resetPunitions, punitions} = usePunitions();

    const handleReset = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        if(confirm('Attention remet toutes les questions et punitions à 0.')) {
            resetQuestions();
            resetPunitions();
        }
    };

    const handleGetQuestion = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault(); 
        getRandomQuestion();
    }

    const handleGetPunition = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault(); 
        getRandomPunition();
    }

    return (
        <main>
            <header className="header">
                <Logo className="header__logo" />
                <p>Apprendre à se connaître autrement</p>
            </header>
            <div className="buttons">
                <Button cb={handleGetQuestion} size="default" currentCount={questionsAlreadyUsed.length} totalCount={questions.length}>Question</Button>
                <Button cb={handleGetPunition} size="small" currentCount={punitionsAlreadyUsed.length} totalCount={punitions.length}>Punition</Button>
            </div>
            <Popup item={randomQuestion} cbClose={() => { resetRandomQuestion(); }} />
            <Popup item={randomPunition} cbClose={() => { resetRandomPunition(); }} />
            <div className="button-group">
                <a className="button-2" onClick={handleReset} href="#">Reset</a>
            </div>
        </main>
    )
}

export default App;