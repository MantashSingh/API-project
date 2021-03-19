import React, { Component } from "react";
import { StyleSheet, View , Text} from "react-native";


function  Footer({diffrentText}) {
    return(
        <View style={styles.footer}>
                    <Text>By {diffrentText} you agree to our</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={styles.tAndc}>Terms of service</Text>
                        <Text> and </Text>
                        <Text style={styles.tAndc}>Privacy policy</Text>
                    </View>
                </View>
    )
    
}
export default Footer;

const styles = StyleSheet.create({

    tAndc: {
        color: "blue",
    },
    footer: {
        marginTop: 20,
        alignItems: "center"
    }
})