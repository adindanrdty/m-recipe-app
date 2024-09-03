import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import RecipesData from '../contants/RecipesData.json';
import ItemRecipe from "../components/ItemRecipe";

const RecipeListScreen = () => {
    const navigation = useNavigation();
    //console.log(RecipesData);
    return (
        <View style={styles.screen}>
            {/* <Text>Recipe List Screen</Text> */}
            <FlatList
        data={RecipesData.recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<ItemRecipe item={item} />)}
      />
            {/* <TouchableOpacity onPress={() => navigation.navigate('ScanRecipeScreen')}>
                <Text>Go to Scan Recipe Screen</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default RecipeListScreen;