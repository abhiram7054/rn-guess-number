import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = props => {
    return (
    <Text style={styles.fontRegular}>{props.children}</Text>
    );
}

const styles=StyleSheet.create({
    fontRegular: {
        fontFamily:"regular",
    }
});

export default BodyText;