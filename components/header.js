import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
    return (
        <View style={styles.header} >
            <Text style={styles.headerText} >{props.title}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        // paddingTop:36,
        backgroundColor: "#fc7d14",
        alignItems: "center",
        justifyContent: "center",

    },
    headerText: {
        color: "black",
        fontSize: 20,
    }
});

export default Header;