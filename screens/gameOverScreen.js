import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/bodyText";
import BoldText from "../components/boldText";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BoldText>The Game is Over!!</BoldText>
            <View style={styles.imageContainer} >
                <Image source={require("../assets/gameover.png")} style={styles.image} resizeMode="cover" />
            </View>
            <BodyText>The number of rounds are: {props.roundNumber}</BodyText>
            <BodyText>The number was: {props.userNumber}</BodyText>
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
    imageContainer: {
        width: "80%",
        height: 300,
        borderRadius: 100,
        overflow: "hidden",
        marginVertical: 30,
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default GameOverScreen;