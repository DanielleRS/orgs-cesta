import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextStyle({ children, style }) {
    let estilos = styles.text;

    if(style?.fontWeight === 'bold') {
        estilos = styles.boldText;
    }

    return <Text style={[style, estilos]}>{ children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    boldText: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    },
});