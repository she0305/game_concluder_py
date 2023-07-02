type Props = {
    text: string;
    onClick: () => void;
}
export default function Button({text, onClick}: Props) {
    return (
        <button
            className={
                "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            }
            onClick={onClick}
        >{text}</button>
    );
}