import { View, Text } from "react-native";
import TaskListItem from "./TaskListItem";
export default function TaskList() {

    return(
        <View>
            <Text>To Do</Text>
            {/*the list of tasks */}

            <TaskListItem task={{description: 'First Task'}}/>
            <TaskListItem task={{description: 'Second Task'}}/>
            <TaskListItem task={{description: 'Third Task'}}  />
            <TaskListItem task={{description: 'Fourth Task'}} />
        </View>
    )



}