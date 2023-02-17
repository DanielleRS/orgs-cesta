import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import TextStyle from '../../../components/TextStyle';

export default function Details({ name, logo, farmName, description, price, buttonText }) {
    return <>
        <TextStyle style={styles.name}>{ name }</TextStyle>
        <View style={styles.farm}>
            <Image source={logo} style={styles.farmImage} />
            <TextStyle style={styles.farmName}>{ farmName }</TextStyle>
        </View>
        <TextStyle style={styles.description}>{ description }</TextStyle>
        <TextStyle style={styles.price}>{ price }</TextStyle>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <TextStyle style={styles.textButton}>{ buttonText }</TextStyle>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    farmImage: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})