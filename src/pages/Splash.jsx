import React, {useEffect} from "react";
import SplashScreen from "react-native-splash-screen";
import {View, Text} from "react-native";

const Splash = () =>{
    useEffect(() => {
        setTimeout(() => {
          SplashScreen.hide();
        }, 1000); //스플래시 활성화 시간
      });
    return(
        <View style = {{flex: 1,justifyContent:'center', alignItems:"center"}}>
            <Text>Splash</Text>
        </View>

    );
};

export default Splash;
