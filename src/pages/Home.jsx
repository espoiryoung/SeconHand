import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert} from 'react-native';

const DummyImg = require('../assets/images/2handSplash.png') ;

const Home = () =>{
    return (
        <SafeAreaView style = {styles.SafeAreaViewStyle}>
            <TouchableOpacity onPress = {()=>{Alert.alert('지역을 골라보세요')}}style={styles.DongSelect}>
                <Text>연희동</Text>
            </TouchableOpacity>  
            <View style={styles.ItemCard}>
                <Image source={DummyImg} style={styles.CardImage}/>
                </View> 
            <View style={styles.Title}>
                <Text>Home입니다. </Text>
            </View>
        </SafeAreaView>
        
        
    )
};
const styles = StyleSheet.create({
    SafeAreaViewStyle:{
        flex:1,
        backgroundColor: '#FFF'

    },
    Title:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    DongSelect:{
        fontSize: 20,
        
    },
    ItemCard:{
        backgroundColor:'#ececec'
    },
    CardImage:{
        //이미지 비율은 그대로 유지하면서 크기를 줄이는 기능을 검색해볼 것.
    }
})
export default Home;