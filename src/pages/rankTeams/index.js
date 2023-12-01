import React, {useState, useEffect} from 'react';
import { FlatList} from 'react-native';

import api from '../../services/api';
import Rank from '../../rank';

import { RankHeader } from '../../components/rankHeader';
import { StyledView } from '../../components/StyledComponents';

export function RankTeams(){

  const [rank, setRank] = useState([]);

  useEffect(() => {
    api.get('campeonatos/10/tabela').then(({data}) => {
      setRank(data)
    });
  }, [])

  return(
    <StyledView className='flex-1 mt-10 h-screen w-full bg-slate-500'>
        <FlatList 
          data={rank}
          keyExtractor={item => item.posicao}
          ListHeaderComponent={() => <RankHeader />}
          renderItem={({item}) => <Rank data={item}/>}
        />
    </StyledView>
  )
}



