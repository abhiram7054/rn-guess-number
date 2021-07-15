import React from "react";
import { Text, StyleSheet } from "react-native";

const BoldText = props => {
    return (
        <Text style={styles.fontBold}>{props.children}</Text>
    );
}

const styles=StyleSheet.create({
    fontBold: {
        fontFamily: "bold"
    }
});

export default BoldText;