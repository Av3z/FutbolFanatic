import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import api from "../../services/api";
import { Matches } from "../../components/Matches";

export function Games(){

    const [games, setGames] = useState([]);

    useEffect(() =>{
        api.get('ao-vivo').then(({ data }) =>{
            setGames(data)
        })
    },[])

    console.log(games)

    return(
        <View>
            <FlatList
                data={games}
                keyExtractor={item => item.partida_id}
                renderItem={({ item }) => <Matches data={item}/> }
            />
        </View>
    )
}