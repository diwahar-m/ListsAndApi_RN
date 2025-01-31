import axios from "axios"
import { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"

interface Post{
    id: string, 
    title:string
}

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

api.interceptors.request.use(config=> 
    {
        console.log(config)
        return config
    }
)

api.interceptors.response.use(response=> {
    console.log(response); 
    return response
})



const AxiosDemoScreen : React.FC =() => {
    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        fetchListOfPost()
    },[])

    const fetchListOfPost = async() => {
        try{
            setLoading(true)
            const response = await api.get<Post[]>('/posts')
            if(response){
                setData(response.data) 
                setLoading(false)
            }else {
                setData([]);
                setLoading(false)
            }

        }catch(error){
            console.log(error)
            setData([]);
            setLoading(false)
        }
    }

    const handleRenderItem  =({item}: {item: Post})=> {
        return <View style={styles.item}>
            <Text style={styles.itemTxt}>{item.title}</Text>
        </View>
    }


    return <View style={styles.container}>
                <Text style={styles.headerTxt}>
                    Axios Fetch
                </Text>
                {
                    loading ? 
                    <ActivityIndicator
                        size={'large'}
                        color={'#0000ff'}
                    />
                     : 
                     <FlatList
                        data={data} 
                        keyExtractor={item => item.id}
                        renderItem={handleRenderItem}
                    />
                }
                
           </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    }, 
    headerText: {
        fontSize: 15, 
        fontWeight: 'bold',
    }, 
    item: {
        backgroundColor: '#c6df0a', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16
    }, 
    itemTxt: {
        fontSize: 16, 
        fontWeight:'bold'
    }
})


export default AxiosDemoScreen