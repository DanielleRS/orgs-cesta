import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TextStyle from '../../components/TextStyle';
import Details from './components/Details';
import Item from './components/Item';

import Top from './components/Top';

export default function Basket({ top, details, items }) {
    return <>
        <FlatList
            data={items.list}
            renderItem={Item}
            keyExtractor={({ name }) => name }
            ListHeaderComponent={() => {
                return <>
                    <Top {...top} />
                    <View style={styles.basket}>
                        <Details {...details} />
                        <TextStyle style={styles.title}>{ items.title }</TextStyle>
                    </View>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})