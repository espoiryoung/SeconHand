/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import SplashScreen from "react-native-splash-screen";
import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from "./src/pages/Router";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/pages/Home'
import Splash from './src/pages/Splash';
type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    //<Splash/>
    <Home/>
    // <NavigationContainer>
    
    //     <Router />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
})
export default App;
