import { StackNavigationProp } from "@react-navigation/stack"
import {FlatList, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native"
import { RootStackListProp } from "./RootNavigator"
import { useTheme } from "../context/ThemeContext"

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
    {
        id:5,
        title: 'Pull To Refresh', 
        screen: 'PullToRefreshDemo',
    },
    {
        id:6,
        title: 'Data Fetch', 
        screen: 'DataFetchingDemo',
    },
    {
        id:7,
        title: 'Axios',
        screen: 'AxiosDemo',
    },
    {
        id:8,
        title: 'Theme',
        screen: 'ThemeDemo',
    },
]

type HomeScreenNavigationProp = StackNavigationProp<RootStackListProp, "Home">

type Prop = {
    navigation: HomeScreenNavigationProp
}

const HomeScreen : React.FC<Prop> =({navigation}) => { 

    const {theme, toggleTheme} = useTheme() 
    const isDarkTheme = theme === 'dark'

    return <View style={[styles.container, {backgroundColor: !isDarkTheme ? '#fff' : '#000'}]}>
            <View style={styles.titleContainer}>
                <Text style={[styles.headerTxt, {color: isDarkTheme ? '#fff' : '#000'}]}>HomeScreen</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#767577'}}
                    thumbColor={isDarkTheme ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleTheme}
                    value={isDarkTheme}
                />   
            </View>
        {/* <Button title="Flat List Demo" onPress={()=> navigation.navigate('FlatListDemo')}/> */}
            <FlatList 
                data={topics} 
                renderItem={({item})=> 
                    <TouchableOpacity style={styles.topicBtn} onPress={()=> navigation.navigate(item?.screen as keyof RootStackListProp)}>
                        <Text style={[styles.topicTxt,  {color: isDarkTheme ? 'red' : '#000'}]}>{item.title}</Text>
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
    headerTxt: {
        fontSize: 16, 
        fontWeight: 'bold'
    },
    titleContainer:{
        flex: 1,
        justifyContent:'space-between',
        padding: 2 ,
        flexDirection: 'row'
    },
    topicBtn: {
        backgroundColor: '#e0e0e0', 
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
    }, 
    topicTxt: {
        fontSize: 16, 
        fontWeight: 'bold'
    }
})

export default HomeScreen