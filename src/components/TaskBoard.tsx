import { View } from "react-native";
import TaskList from "./TaskList";
import { LinearGradient } from 'expo-linear-gradient';


export default function Taskboard () {
    return(
        <View style={{padding: 10 }}>
            
            <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{position:"absolute", top:0, bottom:0, left:0, right:0,}}>
       
      </LinearGradient>

      <TaskList />
      </View>
    )
}