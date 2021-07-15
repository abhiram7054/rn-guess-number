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
import NumberContainer from "../components/numberContainer";
import BodyText from "../components/bodyText";
import BoldText from "../components/boldText";

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
            Alert.alert("Invalid Number", "Number should be between 0 and 100", [{text: "Okay", style: "destructive", onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text style={styles.fontRegular}>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)} />
        </Card>
    }

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}> 
            <View style={styles.screen} >
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <BodyText> Enter a Number </BodyText>
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
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "bold",
    },
    inputContainer: {
        width: 300,
        maxWidth: "100%",
        alignItems: "center",
        fontFamily: "bold"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        // fontFamily: "bold"
    },
    button: {
        width: 90,
        // fontFamily: "bold"
    },
    input: {
        width: 50,
        textAlign: "center",
    },
    summaryContainer: {
        marginTop: 20,
        alignItems:"center",
    },
    fontRegular: {
        fontFamily: "regular",
    },
    fontBold : {
        fontFamily: "bold"
    }
});

export default StartGameScreen;