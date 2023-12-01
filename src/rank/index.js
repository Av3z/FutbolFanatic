import React from 'react';
import { StyledView, StyledText } from '../components/StyledComponents';

export default function Rank({ data }){

    return(

        <StyledView className={"flex-row bg-slate-100 pt-2 "}>
                <StyledView className='flex-1 border border-slate-300 '>
                    <StyledText className='text-center'>{data.posicao}</StyledText>
                </StyledView>
                <StyledView className='flex-5 border border-slate-300 '>
                    <StyledText className='text-center'>{data.time.nome_popular}</StyledText>
                </StyledView>
                <StyledView className='flex-1 border border-slate-300 '>
                    <StyledText className='text-center'>{data.pontos}</StyledText>
                </StyledView>
                <StyledView className='flex-1 border border-slate-300 '>
                    <StyledText className='text-center'>{data.jogos}</StyledText>
                </StyledView>
                <StyledView className='flex-1 border border-slate-300 '>
                    <StyledText className='text-center'>{data.vitorias}</StyledText>
                </StyledView>
                <StyledView className='flex-1 border border-slate-300 '>
                    <StyledText className='text-center'>{data.empates}</StyledText>
                </StyledView>
                <StyledView className='flex-1 border border-slate-300 '>
                    <StyledText className='text-center'>{data.derrotas}</StyledText>
                </StyledView>
                <StyledView className='flex-1 border border-slate-300 '>
                    <StyledText className='text-center'>{data.saldo_gols}</StyledText>
                </StyledView>
        </StyledView>

    )
}

