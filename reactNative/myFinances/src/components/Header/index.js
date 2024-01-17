import React from 'react'
import {
    View,
    StyleSheet,
    text,
    StatusBar
} from 'react-native'

const statusBarHeight = StatusBar.currentHeight;


export default function Header(){
    return(
        <View style={styles.container}>
            <text>Header do app</text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8000ff',
        paddingTop: statusBarHeight,
    }
})