import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ScanRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Scan Recipe Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ScanRecipeScreen;