import { View, Text, TextInput, StyleSheet, Image, Pressable  } from 'react-native'

const MealItem = (props) => {
    const complexityColor = {
        'affordable': '#28A745',
        'pricey': '#ed4337',
        'luxurious': '#f8bc30'
    }
    const durationColor = (duration) => {
        if( duration <= 15){
            return '#28A745'
        }else if(duration <= 45){
            return '#f8bc30'
        }else if(duration > 45){
            return '#ed4337'
        }

    }
    return (
        <Pressable style={styles.itemContainer} onPress={() => {props.navigation.navigate('Meal',{title: props.title, imageUrl: props.imageUrl, ingredients: props.ingredients, affordability: props.affordability, duration: props.duration, complexity: props.complexity, steps: props.steps})}}>
            <Image 
                source={{uri: props.imageUrl}}
                style={styles.mealImage}
            />
            <View style={styles.mealTextContainer}>
                <Text style={styles.mealTitle}>{props.title}</Text>
                <Text style={[styles.mealAffordability, {color: complexityColor[props.affordability]}]}>💵 {props.affordability}</Text>
                <Text style={[styles.mealDuration, {color: durationColor(props.duration), opacity: 0.8}]}>🕑 {props.duration} min</Text>
 
            </View>
        </Pressable>
    )
} 
export default MealItem;
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: 100,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    mealImage: {
        width: 75, 
        height: 75,
        borderRadius: 5,
    },
    mealTextContainer: {
        justifyContent: 'flex-start',
        height: '90%',
        paddingHorizontal: 10,
    },
    mealTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    mealDuration: {
        color: 'black',
        fontWeight: 'bold'
    },
    mealAffordability: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#d1a9ae'
    }
})