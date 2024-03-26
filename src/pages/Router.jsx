import React from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Detail from './Detail';
import Home from './Home';
import Location from './Location';
import Search from './Search';
import Splash from './Splash';

const Stack = createStackNavigator();

const Router = () =>{
    return( 
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Location' component={Location} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='Splash' component={Splash} />

        </Stack.Navigator>
    );
};

export default Router; 