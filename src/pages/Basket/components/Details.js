import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import CustomText from '../../../components/CustomText';
import Button from '../../../components/Button';


export default function Details({ name, farmName, farmLogo, description, price, button }) {
    return <>
        <CustomText style={styles.name}>{name}</CustomText>
        <View style={styles.farm}>
            <Image style={styles.farmImage} source={farmLogo} />
            <CustomText style={styles.farmName}>{farmName}</CustomText>
        </View>
        <CustomText style={styles.description}> {description} </CustomText>
        <CustomText style={styles.price}> {price} </CustomText>
        <Button>{button}</Button>
    </>
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    farm: {
        flexDirection: 'row',
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
        fontWeight: "bold",
        color: "#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});