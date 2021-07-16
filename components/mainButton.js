import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={{...styles.buttonText, ...props.style}}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ededeb",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius:25,

    },
    buttonText: {
        fontFamily: "regular",
        color: Colors.primary,
        fontSize: 18,
    },
});

export default MainButton;