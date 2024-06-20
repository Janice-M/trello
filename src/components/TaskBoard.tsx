import { View } from "react-native";
import TaskList from "./TaskList";
import { LinearGradient } from 'expo-linear-gradient';


export default function Taskboard () {
    return(
        <View style={{padding: 10 }}>
      <TaskList />
     
      </View>
    )
}