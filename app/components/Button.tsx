'use client'

interface ButtonProps {
    label :string;
    onClick : (e : React.MouseEvent<HTMLButtonElement>) => void;
    outline? : boolean;
    small?: boolean;
    disabled?: boolean;
}

const Button : React.FC<ButtonProps> = ({label,onClick,outline,small,disabled}) =>{
    return(
        <button 
        disabled={disabled}
        onClick={onClick}
        className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 transition w-full p-3
        ${outline ? 'bg-black' : 'bg-indigo-600'}
        ${outline ? 'border-white' : 'border-indigo-600'}
        text-white text-xs
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
        `}
        >
            {label}
        </button>
    )
}

export default Button;