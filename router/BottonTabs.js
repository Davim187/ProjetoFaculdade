import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../src/screen/Home';
import Prevencao from '../src/screen/prevençao';
import Previsao from '../src/screen/previsaoClima';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Feather';

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 20,
          right: 20,
          left: 20,
          elevation: 5,
          borderRadius: 25,
          height: 50,
          borderTopWidth: 0,
          shadowOffset: 0,
          shadowColor:'#000',
          shadowOpacity:1,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="file-text" size={size} color={color}
            />
          ),
        }}
        name="Prevencao"
        component={Prevencao}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="cloud-drizzle" size={size} color={color}
            />
          ),
        }}
        name="Previsao"
        component={Previsao}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
