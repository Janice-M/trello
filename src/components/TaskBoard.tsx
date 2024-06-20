import { View, StyleSheet} from "react-native";
import TaskList from "./TaskList";
import { LinearGradient } from 'expo-linear-gradient';


export default function Taskboard () {
    return(
        <View style={{padding: 10 }}>
            
            <LinearGradient
        // Button Linear Gradient
        colors={['#8711C1', '#2472fc', '#192f6a']}
        style={StyleSheet.absoluteFill}>
       
      </LinearGradient>

      <TaskList />
      </View>
    )
}