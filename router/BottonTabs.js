import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/screen/Home';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
       headerShown: false,
      }} name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default MyTabs;