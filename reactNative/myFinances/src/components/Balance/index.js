import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MotiView } from 'moti';

export default function Balance({ saldo, gastos }){
    return (
        <MotiView 
            style={styles.container}
            from={{
                rotateX:'-100deg',
                opacity:0
            }}    
            animate={{
                rotateX:'0deg',
                opacity:1
            }}
            transition={{
                type:'timing',
                duration:800,
                delay:300
            }}
        >
            <View style={styles.item}>
                <Text style={styles.itemTitle} >Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle} >Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol} >R$</Text>
                    <Text style={styles.expenses} >{gastos}</Text>
                </View>
            </View>
        </MotiView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        borderRadius: 10,

        flexDirection:'row',
        justifyContent:'space-between',
        padding: 18,
        marginTop:-24,
        marginStart:14,
        marginEnd:14,

        zIndex:999
    },
    itemTitle:{
        fontSize:20,
        color:'#dadada'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:5
    },
    currencySymbol:{
        color:'#dadada',
    },
    balance:{
        fontSize:22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color:'#e74c3c'
    }
})