import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './components/homepage';
import Registration from './components/registration'; 
import Goals from './components/goals'; 
import Dashboard from './components/dashboard'; 
import Custom from './components/customgoal'; 
import Personal from './components/personalgoals';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />
        
         <Stack.Screen
          name="Goals"
          component={Goals}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Custom"
          component={Custom}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />



        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />






        
  
        
      </Stack.Navigator>
      

    

    </NavigationContainer>
  );
}

export default App;
