import React from 'react';
import { View, StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 13,
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 15
    },
});