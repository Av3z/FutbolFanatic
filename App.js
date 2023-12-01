import React, {useState, useEffect} from 'react';
import { FlatList, View } from 'react-native';

import api from './src/services/api';
import Rank from './src/rank';

import { styled } from 'nativewind';
import { RankHeader } from './src/components/rankHeader';

export default function App(){

  const StyledView = styled(View)


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



