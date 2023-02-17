import React from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';

import TextStyle from '../../../components/TextStyle';

export default function Item({item: { name, image }}) {

    return <View key={name} style={styles.item}>
        <Image source={image} style={styles.image} />
        <TextStyle style={styles.name}>{ name }</TextStyle>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
})