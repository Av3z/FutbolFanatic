import React from "react"
import { StyledView } from "../StyledComponents"


export function Card({ children, style }){
    return(
        <StyledView className={`bg-slate-100 rounded-md shadow-sm shadow-black p-1 ${style}`}>
            {children}
        </StyledView>
    )
}