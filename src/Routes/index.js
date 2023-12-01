import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Games } from '../pages/games';
import { RankPlayers } from '../pages/rankPlayers';
import { RankTeams } from '../pages/rankTeams';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes(){

  return(
  <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#000"
  }}>
    <Tab.Screen
        name={'rankTeams'}
        component={RankTeams}
        options={{
            tabBarIcon: ({ focused, size, color}) => {
                if(focused){
                    return <Ionicons name="trophy" color={color} size={size} />
                }
                return <Ionicons name="trophy-outline" color={color} size={size} />
            }
        }} />

    <Tab.Screen
        name={'rankPlayers'}
        component={RankPlayers}
        options={{
            tabBarIcon: ({ focused, size, color}) =>{
                if(focused){
                    return <Ionicons name="football" color={color} size={size} />
                }
                return <Ionicons name="football-outline" color={color} size={size} />
            }
        }} />

    <Tab.Screen
        name={'games'}
        component={Games} 
        options={{
            tabBarIcon: ({ focused, size, color}) => {
                if(focused){
                    return <Ionicons name="calendar" color={color} size={size} />
                }
                return <Ionicons name="calendar-outline" color={color} size={size} />
            }
        }}/>
  </Tab.Navigator>
  
  )
}



