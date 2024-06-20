import { View } from "react-native";
import TaskList from "./TaskList";
import { LinearGradient } from 'expo-linear-gradient';


export default function Taskboard () {
    return(
        <View style={{padding: 10 }}>
            <TaskList />
            <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
       
      </LinearGradient>
      </View>
    )
}