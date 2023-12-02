import React, {useState, useEffect} from 'react';
import { FlatList} from 'react-native';

import api from '../../services/api';

import { RankHeader } from '../../components/rankHeader';
import { StyledView } from '../../components/StyledComponents';
import RankTeamsTable from '../../components/rankTeamsTable';

export function RankTeams(){

  const [rank, setRank] = useState([]);

  useEffect(() => {
    api.get('campeonatos/10/tabela').then(({data}) => {
      setRank(data)
    });
  }, [])

  const columns = [
    { flex: 1, title: 'POS' },
    { flex: 5, title: 'TIME' },
    { flex: 1, title: 'PTS' },
    { flex: 1, title: 'J' },
    { flex: 1, title: 'V' },
    { flex: 1, title: 'E' },
    { flex: 1, title: 'D' },
    { flex: 1, title: 'SG' },
  ];

  return(
    <StyledView className='flex mt-10'>
        <FlatList 
          data={rank}
          keyExtractor={item => item.posicao}
          ListHeaderComponent={() => <RankHeader columns={columns} />}
          renderItem={({item}) => <RankTeamsTable data={item}/>}
        />
    </StyledView>
  )
}



