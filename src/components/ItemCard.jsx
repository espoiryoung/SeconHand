import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, Dimensions} from 'react-native';

const DummyImg = require('../assets/images/2handSplash.png') ;

const ItemCard = ({data}) =>{
    return(
        <TouchableOpacity onPress = {()=>{Alert.alert('상품상세화면')}}>
            <View style={styles.ItemCard}>
                <View style={styles.CardImageContainer}>
                    <Image  source={DummyImg} style={styles.CardImage}/>
                </View>
                <View style={styles.ItemCardContent}>
                    <Text style={styles.ItemTitle}>{data.title}</Text>
                    <Text style={styles.ItemDong}>{data.dong}</Text>
                    <Text style={styles.ItemPrice}>{data.price}</Text>
                </View>   
            </View> 
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    
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

export default ItemCard;
