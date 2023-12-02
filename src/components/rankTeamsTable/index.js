import React from 'react';
import { StyledView } from '../StyledComponents';
import { TextMain } from '../TextMain';

export default function RankTeamsTable({ data }){

    return(
        <StyledView className={"flex-row bg-slate-50 shadow-sm shadow-black mt-1"}>
            <StyledView className='flex-1  border border-slate-200 '>
                <TextMain style='text-center'>{data.posicao}</TextMain>
            </StyledView>
            <StyledView className='flex-5 border border-slate-200 '>
                <TextMain style='text-center'>{data.time.nome_popular}</TextMain>
            </StyledView>
            <StyledView className='flex-1 border border-slate-200 '>
                <TextMain style='text-center'>{data.pontos}</TextMain>
            </StyledView>
            <StyledView className='flex-1 border border-slate-200 '>
                <TextMain style='text-center'>{data.jogos}</TextMain>
            </StyledView>
            <StyledView className='flex-1 border border-slate-200 '>
                <TextMain style='text-center'>{data.vitorias}</TextMain>
            </StyledView>
            <StyledView className='flex-1 border border-slate-200 '>
                <TextMain style='text-center'>{data.empates}</TextMain>
            </StyledView>
            <StyledView className='flex-1 border border-slate-200 '>
                <TextMain style='text-center'>{data.derrotas}</TextMain>
            </StyledView>
            <StyledView className='flex-1 border border-slate-200 '>
                <TextMain style='text-center'>{data.saldo_gols}</TextMain>
            </StyledView>
        </StyledView>
    )
}

