import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Home = () =>{
    return (
        <View style={styles.Title}>
            <Text>Home입니다. </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    Title:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
export default Home;