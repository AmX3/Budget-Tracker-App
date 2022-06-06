import { Background, Filler, Progress } from "../styles/StyledProgressBar";

interface IProgressBarProps {
    completed: number;
}
const ProgressBar: React.FC<IProgressBarProps> = ({ completed }) => {
    return (
        <Background>
            <Filler>
                <Progress>{completed}%</Progress>
            </Filler>
        </Background>
    );
};

export default ProgressBar;
