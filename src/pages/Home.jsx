import React from 'react';
import {View, Text, StyleSheet,FlatList, SafeAreaView, TouchableOpacity, Image, Alert, Dimensions} from 'react-native';
import ItemCard from '../components/ItemCard';
const DummyImg = require('../assets/images/2handSplash.png') ;

const dummy_data = [
    {   id:1,
        title: '아주 귀여운 에몽가',
        dong: '연희동',
        price: '5,000원',
        //image:
    },
    {   id:2,
        title: '귀여운 에몽가',
        dong: '상수동',
        price: '6,000원',
        //image:
    },
    {   id:3,
        title: '에몽가',
        dong: '동교동',
        price: '7,000원',
        //image:
    },
    {   id:4,
        title: '그냥 에몽가',
        dong: '서교동',
        price: '3,000원',
        //image:
    },
    {   id:5,
        title: '그냥 에몽가',
        dong: '창천동',
        price: '3,000원',
        //image:
    }
]
const Home = () =>{
    return (
        <SafeAreaView style = {styles.SafeAreaViewStyle}>
            <TouchableOpacity onPress = {()=>{Alert.alert('지역을 골라보세요')}}style={styles.DongSelect}>
                <Text style = {{padding: 20}}>연희동</Text>
            </TouchableOpacity>  
            <FlatList
                data= {dummy_data}
                renderItem={({item})=><ItemCard data={item} />}
                keyExtractor={(item)=>item.id}
            />
            
        
        </SafeAreaView>
        
        
    )
};
const styles = StyleSheet.create({
    SafeAreaViewStyle:{
        flex:1,
        backgroundColor: '#FFF'

    },
    
    DongSelect:{
        fontSize: 20,
        
    },
    ItemCard:{
        flexDirection: 'row',
        //backgroundColor:'#ececec',
        height: 130,
        borderBottomWidth:1,
        borderBottomColor:'#eaeaea',
        
    },
    CardImageContainer:{
        padding: 20,
        width:130,
        height:130,
        
    },
    CardImage:{
        //이미지 비율은 그대로 유지하면서 크기를 줄이는 기능을 검색해볼 것.
        height: '100%',
        width: '100%',
        resizeMode:'cover',
        borderRadius:20
    },
    ItemTitle:{
        fontSize:16,
        paddingBottom:4
    },
    ItemDong:{
        fontSize: 12,
        color: '#808080',
        fontWeight: '500',
        paddingBottom:4
    }, 
    ItemPrice:{

    },
    ItemCardContent:{
        padding: 30
    }
})
export default Home;