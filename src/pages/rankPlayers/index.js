import React, { useState, useEffect } from "react";
import api from '../../services/api'
import { StyledView } from "../../components/StyledComponents";
import { FlatList } from "react-native";
import { RankPlayersTable } from "../../components/RankPlayersTable";
import { RankHeader } from '../../components/rankHeader';


export function RankPlayers(){
    
    const [rankPlayers, setRankPlayers] = useState([]);

    useEffect(() =>{
        api.get('campeonatos/10/artilharia').then(({ data }) =>{
            setRankPlayers(data);
        });
    },[])

    const columns = [
        { flex: 2, title: 'TIME' },
        { flex: 2, title: 'JOGADOR' },
        { flex: 1, title: 'GOLS' },
    ]

    console.log(rankPlayers)

    return(
        <StyledView className="mt-10">
            <FlatList 
                data={rankPlayers}
                keyExtractor={item => item.atleta.atleta_id}
                ListHeaderComponent={() => <RankHeader  columns={columns} />}
                renderItem={({item}) => <RankPlayersTable data={item}/>}
            />
        </StyledView>
    )
}