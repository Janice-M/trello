import { View, Text,StyleSheet, Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function TaskListItem({ task}) {
    return(
        

     <Link href={'/${task.id}'}  asChild >
             <Pressable style={ styles.container} >
            <Text style={styles.text}>{task.description}</Text> 
            <AntDesign name="closesquareo" size={16} color="pink" />  
            </Pressable>

    </Link>
            
             
        

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000435',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    text: {
        color:'white',
        fontSize:16,
    }

   
})