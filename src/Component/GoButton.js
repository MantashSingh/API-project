import React, { Component } from "react";
import {  TouchableOpacity , StyleSheet, View , Image} from "react-native";
import imagePath from "../assets/images/imagePath";



function  GoButton({ onPress , style }) {

    return(
        
    
        <TouchableOpacity onPress={onPress} style={style}> 
                        <Image source={imagePath.go}
                            style={styles.goIcon} />
                    </TouchableOpacity>
               
    
    )
    
}
export default GoButton;



const styles = StyleSheet.create({
    goIcon: {
        width: 25,
        height: 25,
    
    
    },
})
