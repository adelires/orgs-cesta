import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';
import CustomText from '../../components/CustomText';

export default function Basket({ header, details, items }) {
    return <>
        <FlatList
            data={items.list}
            renderItem={Item}
            keyExtractor={({ name }) => name}
            style={styles.list}
            ListHeaderComponent={() => {
                return <>
                    <Header {...header} />
                    <View style={styles.basket}>
                        <Details {...details} />
                        <CustomText style={styles.title}>{items.title}</CustomText>
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
        paddingHorizontal: 16
    }
});