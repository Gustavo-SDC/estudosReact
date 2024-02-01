import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import {AntDesign} from '@expo/vector-icons';

export default function Actions(){
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={26} color="#000"/>
                </View>
                <Text style={styles.buttonLabel}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="tagso" size={26} color="#000"/>
                </View>
                <Text style={styles.buttonLabel}>Compras</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color="#000"/>
                </View>
                <Text style={styles.buttonLabel}>Carteira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000"/>
                </View>
                <Text style={styles.buttonLabel}>Boletos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000"/>
                </View>
                <Text style={styles.buttonLabel}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        maxHeight:84,
        margin:24,
    },
    actionButton:{
        alignItems:'center',
        justifyContent:'center',
        gap:5,

        margin:12,
    },
    areaButton:{
        backgroundColor:'#dadada',
        borderRadius:50,
        padding:12,

        width:60,
        height:60,

        alignItems:'center',
        justifyContent:'center',
    }
})