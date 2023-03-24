import { View, Text, Pressable, StyleSheet  } from 'react-native'

const PrimaryButton = (props) => {
    return (
        <Pressable onPress={props.press} style={[styles.button, {backgroundColor: props.bg}]}>
            <View>
                <Text style={[styles.buttonText, {color: props.fcolor}]}> {props.children} </Text>
            </View>
        </Pressable>
    )
} 
export default PrimaryButton;
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    borderRadius: 10,
    minWidth: 100,
    // backgroundColor: color,
    marginHorizontal: 10,
    marginLeft: 0,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    // color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
  }
})