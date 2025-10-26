// import { JSX } from "react";
import style from './button.module.css'

export interface MiButtonProps {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    loading?: boolean;
    click?: ()=>void;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    textButton?: string
}

export const MiButton = ({variant, size, disabled= false, loading=false, click,leftIcon, rightIcon, textButton}:MiButtonProps) => {

    return (
        <button
        className={style.button}
        disabled= {disabled || loading}
        onClick={click}
        >
           {leftIcon} {loading? 'Cargando...' : textButton} {rightIcon} 
        </button>
    )
}