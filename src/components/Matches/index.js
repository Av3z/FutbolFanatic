import { Card } from "../Card";
import { StyledView } from "../StyledComponents";
import { Ionicons } from "@expo/vector-icons";


export function Matches({ data }){
    return(
        <StyledView className="mt-10 items-center justify-center ">
            <Card style={"p-5 mt-5"}>
                <StyledView className="flex flex-row gap-8 items-center justify-center">

                    <StyledView className="flex-row items-center">
                        <TextMain> {data.data_realizacao}</TextMain>
                    </StyledView>

                    <StyledView className="flex-row items-center">
                        <Ionicons name="calendar" size={24} color="black" />
                    </StyledView>

                    <StyledView className="flex-row items-center">
                        <TextMain>{data.hora_realizacao}</TextMain>
                    </StyledView>     
                </StyledView>

                <StyledView className="flex items-center justify-center gap-8 flex-row h-32">
                    <StyledView>
                        <TextMain>{data.time_mandante.nome_popular}</TextMain>     
                    </StyledView>
                    <StyledView>
                        <TextMain >{data.placar_mandante}</TextMain>      
                    </StyledView>
                    <StyledView>
                        <TextMain>X</TextMain>     
                    </StyledView>
                    <StyledView>
                        <TextMain>{data.placar_visitante}</TextMain> 
                    </StyledView>
                    <StyledView>
                        <TextMain>{data.time_visitante.nome_popular}</TextMain>      
                    </StyledView>
                </StyledView>

                <StyledView className="flex flex-row gap-8 items-center justify-center">

                    <StyledView className="flex-row items-center justify-center">
                        <Ionicons name="location" size={24} color="black" />
                        <TextMain >{data.estadio.nome_popular}</TextMain>
                    </StyledView>
                    
                </StyledView>

            </Card>
        </StyledView>
        
    )
}