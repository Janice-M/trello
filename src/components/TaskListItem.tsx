import { View, Text,StyleSheet } from "react-native"


export default function TaskListItem() {
    return(
        <View style={{ backgroundColor:'black'}} >
            <Text style={{color:'white'}}>
                First Task
            </Text>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    },

    text{
        color:'white'
    }
})