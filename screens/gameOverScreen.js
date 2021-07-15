import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.fontBold}>The Game is Over!!</Text>
            <Text style={styles.fontRegular}>The number of rounds are: {props.roundNumber}</Text>
            <Text style={styles.fontRegular}>The number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View> 
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    fontRegular: {
        fontFamily: "regular",
    },
    fontBold: {
        fontFamily: "bold",
    }

});

export default GameOverScreen;