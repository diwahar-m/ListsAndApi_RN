import { StackNavigationProp } from "@react-navigation/stack"
import {FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackListProp } from "./RootNavigator"

const topics = [
    {
        id:1,
        title: 'FLat List Demo', 
        screen: 'FlatListDemo',
    },
    {
        id:2,
        title: 'Section List Demo', 
        screen: 'SectionListDemo',
    },
    {
        id:3,
        title: 'Touchable Demo', 
        screen: 'TouchableDemo',
    },
    {
        id:4,
        title: 'Modal Demo', 
        screen: 'ModalDemo',
    },
]

type HomeScreenNavigationProp = StackNavigationProp<RootStackListProp, "Home">

type Prop = {
    navigation: HomeScreenNavigationProp
}

const HomeScreen : React.FC<Prop> =({navigation}) => {

    return <View style={styles.container}>
            <Text>HomeScreen</Text>
        {/* <Button title="Flat List Demo" onPress={()=> navigation.navigate('FlatListDemo')}/> */}
            <FlatList 
                data={topics} 
                renderItem={({item})=> 
                    <TouchableOpacity style={styles.topicBtn} onPress={()=> navigation.navigate(item?.screen as keyof RootStackListProp)}>
                        <Text style={styles.topicTxt}>{item.title}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }, 
    topicBtn: {
        backgroundColor: '#e0e0e0', 
        padding: 16, 
        marginBottom: 8,
        borderRadius: 8
    }, 
    topicTxt: {
        fontSize: 16, 
        fontWeight: 'bold'
    }
})

export default HomeScreen