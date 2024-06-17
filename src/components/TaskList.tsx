import { View, Text, FlatList } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";


export default function TaskList() {
    const [tasks, setTasks] =useState([])

    return(
        <View style={{backgroundColor: '#121f2c', padding:10, borderRadius:8}}>
<Text style={{color: 'white', fontWeight:'bold', fontSize: 20, marginVertical:10 }}>My To Dos </Text>
            {/*the list of tasks */}
            <FlatList 
                data={tasks}
                renderItem={({item}) =><TaskListItem task={item} />}/>
            <TaskListItem task={{description: 'First Task'}}/>
            <TaskListItem task={{description: 'Second Task'}}/>
            <TaskListItem task={{description: 'Third Task'}}  />
            <TaskListItem task={{description: 'Fourth Task'}} />

             {/*the new task input */}


        </View>
    )



}