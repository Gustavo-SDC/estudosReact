import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView, MotiText, AnimatePresence } from "moti";


export default function Movements({ data }){
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={()=> setShowValue(!showValue)}>

            <View>
                <Text style={styles.label}>{data.label}</Text>
                <Text style={styles.date}>{data.date}</Text>
            </View>

            {showValue ?(
                <AnimatePresence exitBeforeEnter>
                    <MotiText 
                        style={data.type === 1 ? styles.value : styles.expenses}
                        from={{
                            translateX:100,
                        }}
                        animate={{
                            translateX:0,
                        }}
                        transition={{
                            type:'timing',
                            duration:150,
                        }}
                    > 
                        {data.type === 1 ? `R$ ${data.value}`: `R$ -${data.value}`} 
                    </MotiText>

                </AnimatePresence>
            ): (
                <AnimatePresence exitBeforeEnter>
                    <MotiView 
                        style={styles.skeleton}
                        from={{
                            translateX:100,
                        }}
                        animate={{
                            translateX:0,
                        }}
                        transition={{
                            type:'timing',
                            duration:150,
                        }}
                    />
                </AnimatePresence>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:24,
        borderBottomWidth: .5,
        borderBottomColor: '#dadada',
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        paddingBottom:8,
    },
    label:{
        color:'#777',
        fontWeight:'bold',
        fontSize:16,
    },
    date:{
        color:'#dadada',
        fontWeight:'bold'
    },
    value:{
        color:'#2ecc71',
        fontSize:18,
        fontWeight:'bold'
    },
    expenses:{
        color:'#e74c3c',
        fontSize:18,
        fontWeight:'bold'
    },
    skeleton:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:'#dadada',
        borderRadius:10,
    }
})