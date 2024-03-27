// 중고물품을 검색할 수 있는 화면이며 
// TextInput의 value 값에 따라 더미데이터들을 나열한다.

import React,{useState} from 'react';
import {View, Text,TextInput, StyleSheet,FlatList, SafeAreaView, TouchableOpacity, Image, Alert, Dimensions} from 'react-native';
const searchIcon = require('../assets/icons/search.png');

const dummy_history = [
    {
        id:1,
        // searchTime:,
        content: "모자"
    },
    {
        id:2,
        // searchTime:,
        content: "청소기"
    },
    {
        id:3,
        // searchTime:,
        content: "지갑"
    },
    {
        id:4,
        // searchTime:,
        content: "바지"
    }
]
const Search = () =>{
    const [keyword, setKeyword] = useState('');
    
    const Item = ({data})=>{
        <View style={styles.SearchList}>
            <Text>{data.content}</Text>
        </View>
    }

    return (
        <SafeAreaView style = {styles.SafeAreaViewStyle}>
            
                <View style={styles.SearchInputContainer}>
                    <View style={ styles.SearchInputWrapper}>
                        <TouchableOpacity>
                            <Image source={searchIcon} style={{width:24, height: 24}}/>
                        </TouchableOpacity>
                        <TextInput 
                            placeholder ='검색어를 입력하세요'
                            value={keyword}
                            onChange={(text)=>setKeyword(text)}
                            spellCheck={false}
                            autoCorrect={false}
                            // style={styles.SearchInputText}
                        />
                    </View>
                </View>
                <View style={styles.Recent}>
                    <Text>최근검색어</Text>
                    <FlatList
                        data={dummy_history}
                        renderItem = { ({item})=> <Item data={item}/>}
                        keyExtractor={(item)=>item.id}
                        style={styles.SearchList}
                    />
                </View>
            
            
            
            <View style={styles.Title}>
                <Text>검색 화면입니다. </Text>
            </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    SafeAreaViewStyle:{
        flex:1,
        backgroundColor: '#FFF'

    },
    Title:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    SearchInputWrapper:{
        flex:1,
        flexDirection:'row',
        borderRadius:4,
        backgroundColor:'#ececec',
        padding: 10,
        paddingRight:30,
        marginHorizontal:16,
        marginVertical:12,
        alignItems:'center',
         
    },
    SearhInputIcon:{
        marginLeft:16,
        marginRight:2
    },
    SearchInputText:{
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        fontWeight: '400',
        color:'#808080',
        paddingRight: 12
        

    },
    SearchInputContainer:{
        height: 68,
    }, 
    Recent:{
        borderBottomWidth:1,
        borderColor:'#eaeaea',
        padding:16
    },
    SearchList:{
        borderBottomWidth:1,
        borderColor:'#eaeaea',
        padding:16
    }
})

export default Search;