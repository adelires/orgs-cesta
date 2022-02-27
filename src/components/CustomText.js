import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomText({ children, style }) {
    let newStyles = styles.text;

    if (style?.fontWeight === "bold") {
        newStyles = styles.boldText;
    }

    return <Text style={[style, newStyles]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "normal",
        fontFamily: "MontserratRegular",
    },
    boldText: {
        fontWeight: "normal",
        fontFamily: "MontserratBold",
    }
})