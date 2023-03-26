import { View, Text, StyleSheet, FlatList, ScrollView, Platform, Image } from 'react-native'
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import PrimaryButton from '../components/PrimaryButton'
import SearchBar from '../components/SearchBar'
import MealItem from '../components/mealItem';
import { CATEGORIES } from '../assets/danr/data/dummy-data';
import { MEALS } from '../assets/danr/data/dummy-data';
function MainScren({navigation}){
    const [meals, setMeals] = useState(MEALS)
    const [searhBar, setSearchBar] = useState('')

    const renderCategoryItem = (itemData) => {
      return <PrimaryButton bg={itemData.item.color} fcolor={itemData.item.fcolor}  press={() => {catPressHandler(itemData.item.id)}}>{itemData.item.title}</PrimaryButton>
    }
    const filteredMeals = (catId) => {
        if(catId == 'c0'){
            setMeals(MEALS)
        }else{
            setMeals(MEALS.filter((mealItem) => {
                return mealItem.categoryIds.indexOf(catId) >= 0;
            }))
        }
    }
    const renderMeals = (itemData) => {
        const mealProps = {
            title: itemData.item.title,   
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,    
            affordability: itemData.item.affordability,
            duration: itemData.item.duration,
            ingredients: itemData.item.ingredients,
            steps: itemData.item.steps,
            navigation: navigation 
        }
        return <MealItem {...mealProps}/>
    }
    let catPressHandler = (catId) => {
        filteredMeals(catId)
    }
    const searchMeals = (val) => {
        setMeals(MEALS.filter((mealItem) => {
            return mealItem.title.toLowerCase().includes(val)
        }))
    }


    const categoriesNew = [
        {id: 'c0', title: 'All', color: '#2d293a', fcolor: 'white'},
        ...CATEGORIES
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Es Balles Recepies</Text>
            <SearchBar search={searchMeals}>Search for recepies</SearchBar>

            <Text style={styles.paragraph}>Find</Text>
            <View>
                <FlatList
                    data={categoriesNew}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCategoryItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={styles.categoryContainer}
                ></FlatList>
            </View>

            <View style={styles.mealsContainer}>
                <FlatList
                    data={meals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMeals}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    
                ></FlatList>
            </View>
        </View>
    )
}
export default MainScren;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f6f2',
      paddingTop: Constants.statusBarHeight,
      paddingHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 25,
    },
    paragraph: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 15,
    },
    categoryContainer: {
        height: 40,
    },
    mealsContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        width: '100%',
    },
  });