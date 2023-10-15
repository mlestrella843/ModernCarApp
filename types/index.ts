import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: String;
    containerStyles ?: String;
    handleClick ?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType ?: "button" | "submit";
}