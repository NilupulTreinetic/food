import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const ResultListItem = ({result})=>{
    return (
        <View style={styles.container}>
            <Image style= {styles.image}source={{ uri:result.image_url}}/>
            <Text style={styles.title}>{result.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:20
    },
    image:{
        height:150,
        width:250,
        borderRadius:5,
        
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
      },
});

export default ResultListItem;