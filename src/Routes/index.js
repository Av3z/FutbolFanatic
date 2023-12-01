import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Games } from '../pages/games';
import { RankPlayers } from '../pages/rankPlayers';
import { RankTeams } from '../pages/rankTeams';

const Tab = createBottomTabNavigator();

export function Routes(){

  return(
  <Tab.Navigator>
    <Tab.Screen
        name={'rankTeams'}
        component={RankTeams} />

    <Tab.Screen
        name={'rankPlayers'}
        component={RankPlayers} />

    <Tab.Screen
        name={'games'}
        component={Games} />
  </Tab.Navigator>
  
  )
}



