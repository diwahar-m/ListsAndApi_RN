import { useState } from "react"
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

const TouchableScreen: React.FC =() => {
    const [count, setCount] = useState<number>(0)
    return (
        <View style={styles.container}>
            <Text style={styles.headerTxt}>Touchable Screen</Text>
            <TouchableWithoutFeedback onPress={()=> setCount(count + 1)}>
                <View style={styles.btn}>
                    <Text style={styles.btnTxt}>Touchable Without Feedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <Pressable 
                style={({pressed})=> [
                    styles.btn, {backgroundColor: pressed ? '#dfef02' : '#b462'}
                ]}
                onPress={()=> setCount(count + 1)}
            > 
            {
                ({pressed}) => (
                    <Text style={[styles.btnTxt, {color: pressed ? 'red' : 'white'}]}>
                        {pressed ? 'Pressed Now' : 'Press'}
                    </Text>
                )
            }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10
    },  
    headerTxt: {
        fontSize: 20, 
        fontWeight: 'bold'
    }, 
    btn: {
        padding: 10, 
        backgroundColor: '#4ca008', 
        borderRadius: 5, 
        minWidth: 250, 
        marginBottom: 10, 
        alignItems:'center'

    }, 
    btnTxt: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#fff'
    }
})



export default TouchableScreen