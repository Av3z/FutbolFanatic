import { StyledText } from "../StyledComponents"

export function TextMain({ children, style }){
    return(
        <StyledText className={` font-bold text-slate-600 ${style}`}>{children}</StyledText>
    )
}