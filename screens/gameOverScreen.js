import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/bodyText";
import BoldText from "../components/boldText";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BoldText>The Game is Over!!</BoldText>
            <View style={styles.imageContainer} >
                {/* <Image source={require("../assets/gameover.png")} style={styles.image} resizeMode="cover" /> */}
                <Image fadeDuration={300} source={{uri: "https://png.pngtree.com/element_origin_min_pic/16/08/05/0857a3dba9ed50f.jpg"}} style= {styles.image} resizeMode="cover" />
            </View>
            <View style={styles.textContainer}>
                <BoldText style={styles.textALigner}>Your Phone took :  
                    <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to guess the number : 
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BoldText>
            </View>
            {/* <BodyText>The number was: {props.userNumber}</BodyText> */}
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
    },
    textContainer:{
        marginHorizontal: 30,
    },
    textALigner:{
        textAlign:"center",
        fontFamily:"regular",
    },
    highlight: {
        fontFamily: "bold",
        color: Colors.primary,
    }
});

export default GameOverScreen;