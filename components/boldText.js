import React from "react";
import { Text, StyleSheet } from "react-native";

const BoldText = props => {
    return (
        <Text style={{...styles.fontBold, ...props.style}}>{props.children}</Text>
    );
}

const styles=StyleSheet.create({
    fontBold: {
        fontFamily: "bold",
        fontSize: 20,
    }
});

export default BoldText;