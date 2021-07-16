import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ededeb",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius:25,

    },
    buttonText: {
        fontFamily: "regular",
        color: Colors.primary,
        fontSize: 18,
    },
});

export default MainButton;