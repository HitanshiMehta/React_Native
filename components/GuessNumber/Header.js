import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../Constants/Colors'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 92,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold"
    }

})