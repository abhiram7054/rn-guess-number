import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import NumberContainer from "../components/numberContainer";
import Card from "../components/card";
import Colors from "../constants/colors";
import colors from "../constants/colors";
import MainButton from "../components/mainButton";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min,max,exclude);
    }
    else {
        return randomNumber;
    }
};



const GameScreen = props => {
    const initialGuess =generateRandomBetween(1,100,props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses,setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver ]);

    const nextGuessHandler = direction => {
        if ((direction === "lower" && currentGuess < props.userChoice) || (direction==="greater" && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie", "You know that this is wrong...", [{text: "Sorry", style: "destructive"}]);
            return;
        }
        if (direction === "lower") {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess + 1; //to deal with the keys in the list
        }
        const nextNumber= generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(currPastGuesses => [nextNumber, ...currPastGuesses]);
    };


    return (
        <View style={styles.screen}>
            <Text style={styles.fontRegular}>Oppenent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}> 
                <MainButton onClick={nextGuessHandler.bind(this, "lower")}>
                    <AntDesign name="downcircle" size={24} color={Colors.primary} />
                </MainButton>
                <MainButton onClick={nextGuessHandler.bind(this, "greater")}>
                <AntDesign name="upcircle" size={24} color={Colors.primary} />
                </MainButton>
            </Card>
            <View style={styles.surround}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    {pastGuesses.map((guess, index) => <View key={guess}><MainButton style={styles.listItem}>#{pastGuesses.length - index}    {guess}</MainButton></View>)}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:10,
        alignItems: "center",
        justifyContent: "center"

    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
        width: 400,
        maxWidth: "80%",
    },
    fontRegular: {
        fontFamily: "regular",
    },
    fontBold: {
        fontFamily: "bold",
    },
    listItem: {
        marginVertical:2,
    },
    surround: {
        flex: 1,
    },
    scroll: {
        alignItems: "center",
        justifyContent: "flex-end",
        flexGrow:1,
    }
});

export default GameScreen;