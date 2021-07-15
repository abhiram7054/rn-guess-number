import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from "react-native";

import Card from "../components/card";
import Colors from "../constants/colors";
import Input from "../components/input";

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number", "Number should be between 0 and 100", [{text: "Okay", style: "destructive", onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Text>Chosen Number : {selectedNumber} </Text>
    }

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}> 
            <View style={styles.screen} >
                <Text style={styles.title}>Start a New Game!</Text> 
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <Text> Enter a Number </Text>
                        <Input style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength ={2}
                        onChangeText = {numberInputHandler}
                        value = {enteredValue} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}><Button color={Colors.secondary}  title="RESET" onPress={resetInputHandler} /></View>
                            <View style={styles.button}><Button color={Colors.primary} title="CONFIRM" onPress={confirmInputHandler} /></View>
                        </View>
                    </View> 
                </Card>
                {confirmedOutput}
            </View> 
        </TouchableWithoutFeedback>
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