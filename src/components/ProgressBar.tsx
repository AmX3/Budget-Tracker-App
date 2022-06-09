import { Background, Container, Progress } from "../styles/StyledProgressBar";

interface IProgressBarProps {
    amount: number;
    maximum: number;
}
const ProgressBar: React.FC<IProgressBarProps> = ({ amount, maximum }) => {
    const handleProgressBar = (amount: number, maximum: number) => {
        const ratio = (amount / maximum) * 100;
        if (ratio < 50) {
            return "green";
        } else if (ratio < 75) {
            return "orange";
        } else {
            return "red";
        }
    };

    return (
        <Container color={handleProgressBar(amount, maximum)}>
            <Progress>{(amount / maximum) * 100}%</Progress>
            <Background value={amount} max={maximum}></Background>
        </Container>
    );
};

export default ProgressBar;
