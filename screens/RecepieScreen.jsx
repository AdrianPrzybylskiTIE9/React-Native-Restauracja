import { View, Text, StyleSheet, FlatList, ScrollView, Platform, Image } from 'react-native'
import React, { useState } from 'react';


function RecepieScreen({route, navigation}){
    const {title, imageUrl, ingredients, affordability, duration, complexity, steps} = route.params
    console.log(ingredients);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: imageUrl}}
                    style={styles.mealImage}
                />
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.mealTitle}>{title}</Text>

                <View style={styles.info}>
                    <Text style={styles.infoText}>🕑 {duration} min</Text>
                    <Text style={styles.infoText}>💵 {affordability.charAt(0).toUpperCase() + affordability.slice(1)}</Text>
                    <Text style={styles.infoText}>🍴 {complexity.charAt(0).toUpperCase() + complexity.slice(1)}</Text>
                </View>

                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Ingredients</Text>
                    <FlatList
                        data={ingredients}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            const imageName = item[0].replace(/ /g, '-').replace(/`/g, '').toLowerCase();
                            const imageSource = '../assets/icons/'+imageName+'.png'
                            console.log(imageSource);

                            return(
                            <View style={styles.ingredientContainer}>   
                                <Image
                                    // source={require(imageSource)}
                                    style={styles.ingredientImage}
                                />
                                <Text style={styles.mealIngredients}>{item[0]}</Text>
                            </View>)
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={styles.ingredients}
                    ></FlatList>

                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Steps</Text>
                    {/* <FlatList
                        data={steps}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => (
                            <View style={styles.stepContainer}>
                                <Text style={styles.stepText}><Text style={{fontWeight: 'bold', fontSize: 18}}>{index+1}.  </Text>{item}</Text>
                            </View>
                            
                        )}
                        scrollEnabled={false}
                        
                    ></FlatList> */}
                    
                </ScrollView>
            </View>
        </View>
    )
}
export default RecepieScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f9c430',
        zIndex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '25%',
        zIndex: 1,
    },
    mealImage: {
        width: '40%', 
        height: '100%',
        borderRadius: 20,
        marginBottom: 10,
        top: 50,
        zIndex: 1,
    },
    descContainer: {
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: '#f8f6f2',
        height: '75%',
        paddingTop: 55,
        paddingHorizontal: 20,
        zIndex: 0,
    },
    mealTitle: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    info: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: 50,
        marginVertical: 15,
    },
    infoText: {
        marginHorizontal: 5,
    },
    ingredients: {
        flex: 1,
        flexDirection: 'row',
        // marginVertical: 10,
    },
    ingredientContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#fefeff',
        // width: 75,
        height: 75,
        marginRight: 20,
        marginVertical: 10,
    },
    ingredientImage: {
        width: 50,
        height: 50,
    },
    mealIngredients: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        paddingHorizontal: 20,
        paddingVertical: 5,
        opacity: .7,
    },
    steps: {
        flex: 1,
        // flexDirection: 'row',
        // marginVertical: 10,
        // height: 500
    },
    stepContainer: {
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 25,
    },
    stepText: {
        fontSize: 16
    },
});