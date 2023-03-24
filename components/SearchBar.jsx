import { View, Text, TextInput, StyleSheet, Platform  } from 'react-native'

const PrimaryButton = (props) => {
    let typeHandler = () => {
        console.log('typing');
    }

    return (
        <View style={styles.shadow}>
            <View style={styles.searchContainer}>
                <Text>🔍</Text>
                <TextInput style={styles.input} placeholder={props.children} onChangeText={props.search}></TextInput>
            </View>
        </View>
    )
} 
export default PrimaryButton;
const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',

        width: '100%',
        height: '100%',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertica: 5,


        overflow: Platform.OS === 'android' ? "hidden": "visible"
    },
    shadow: {
        flex: 1,
        maxHeight: 50,
        elevation: 6,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
    },
    input: {
        borderWidth: 0,
        color: '#454443',
        marginHorizontal: 10,
    }
})