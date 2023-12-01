
import {View, Text} from 'react-native';
import { styled } from 'nativewind';



export function RankHeader(){

    const StyledView = styled(View)
    const StyledText = styled(Text)

    return(
        <StyledView className='flex-row bg-slate-200 items-center'>
            <StyledView className='flex-1 border border-slate-300 '>
            <StyledText className='text-center font-bold'>POS</StyledText>
            </StyledView>
            <StyledView className='flex-5 border border-slate-300 '>
            <StyledText className='text-center font-bold'>TIME</StyledText>
            </StyledView>
            <StyledView className='flex-1 border border-slate-300 '>
            <StyledText className='text-center font-bold'>PTS</StyledText>
            </StyledView>
            <StyledView className='flex-1 border border-slate-300 '>
            <StyledText className='text-center font-bold'>J</StyledText>
            </StyledView>
            <StyledView className='flex-1 border border-slate-300 '>
            <StyledText className='text-center font-bold'>V</StyledText>
            </StyledView>
            <StyledView className='flex-1 border border-slate-300 '>
            <StyledText className='text-center font-bold'>E</StyledText>
            </StyledView>
            <StyledView className='flex-1 border border-slate-300 '>
            <StyledText className='text-center font-bold'>D</StyledText>
            </StyledView>
            <StyledView className='flex-1 border border-slate-300 '>
            <StyledText className='text-center font-bold'>SG</StyledText>
            </StyledView>
        </StyledView>
    )
}