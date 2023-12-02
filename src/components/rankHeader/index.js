import { StyledView, StyledText } from '../StyledComponents';

export function RankHeader({ columns }){

    const TableColumn = ({ flex, title }) => (
        <StyledView className={`flex-${flex} border items-center border-slate-200`}>
          <StyledText>{title}</StyledText>
        </StyledView>
      );

    return(
        <StyledView className='flex-row bg-slate-100 items-center'>
            <StyledView style={{ flexDirection: 'row' }}>
                {columns.map((column, index) => (
                <TableColumn key={index} {...column} />
                ))}
            </StyledView>
        </StyledView>
    )
}