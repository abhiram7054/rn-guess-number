import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/card";
import Colors from "../constants/colors";
import Input from "../components/input";

const StartGameScreen = props => {
    return(
        <View style={styles.screen} >
            <Text style={styles.title}>Start a New Game!</Text> 
            <Card style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <Text> Enter a Number </Text>
                    <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength ={2} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={Colors.secondary} title="RESET" onPress={() => {}} /></View>
                        <View style={styles.button}><Button color={Colors.primary} title="CONFIRM" onPress={() => {}} /></View>
                    </View>
                </View> 
            </Card>
        </View> 
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    title:{
        fontSize: 22,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: "100%",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    button: {
        width: 90,
    },
    input: {
        width: 50,
        textAlign: "center",
    }
});

export default StartGameScreen;