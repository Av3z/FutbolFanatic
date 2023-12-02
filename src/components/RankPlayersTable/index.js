import React from 'react'
import { StyledView } from "../StyledComponents"
import { TextMain } from '../TextMain'

export function RankPlayersTable( { data } ){
    return(
        <StyledView className='justify-center items-center bg-slate-50 rounded-md'>
            <StyledView className="flex flex-row justify-between">
                <TextMain style="flex-2 border border-slate-200 p-1 text-center">
                    {data.time.nome_popular}
                </TextMain>
                <TextMain style="flex-2 border border-slate-200 p-1 text-center">
                    {data.atleta.nome_popular}
                </TextMain>
                <TextMain style="flex-1 border border-slate-200 p-1 text-center">
                    {data.gols}
                </TextMain>
            </StyledView>
        </StyledView>
    )
}