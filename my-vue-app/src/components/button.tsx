import '../CSS/button.css';

interface Props {
    text: string;
}

export const Button = ({ text }: Props) => {
    return (
        <button>
            <span>
                {text}
            </span>
        </button>
    );
};

export default Button;
