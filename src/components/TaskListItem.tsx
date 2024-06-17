import { View, Text,StyleSheet } from "react-native"


export default function TaskListItem() {
    return(
        <View style={ styles.container} >
            <Text style={styles.text}>
                First Task
            </Text>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        padding: 10,
    },
    text: {
        color:'white'
    }

   
})