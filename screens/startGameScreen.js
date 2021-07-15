import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/card";

const StartGameScreen = props => {
    return(
        <View style={styles.screen} >
            <Text style={styles.title}>Start a New Game!</Text> 
            <Card style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <Text> Enter a Number </Text>
                    <TextInput />
                    <View style={styles.buttonContainer}>
                        <Button color="black" title="RESET" onPress={() => {}} />
                        <Button color="black" title="CONFIRM" onPress={() => {}} />
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
        maxWidth: "80%",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    }
});

export default StartGameScreen;