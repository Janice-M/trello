import { View, Text, FlatList, TextInput, Button } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";


export default function TaskList() {
    const [tasks, setTasks] =useState([
        {description: 'Take cats to vet'},
        {description: 'Madrassa'},
        {description: ' Pilates'}
    ])

    const createTask = () =>
        console.warn('oopsie daisy');

    return(
        <View style={{backgroundColor: '#121f2c', padding:16, borderRadius:8, gap:5 }}>
<Text style={{color: 'white', fontWeight:'bold', fontSize: 20, marginVertical:10 }}>My To Dos </Text>
            {/*the list of tasks */}
            <FlatList 
                data={tasks}
                contentContainerStyle={{gap:7}}
                renderItem={({item}) =><TaskListItem task={item} />}/>
           
         

             {/*the new task input */}
                <TextInput
                 placeholder="New Task" 
                 placeholderTextColor="grey" 
                 style ={{color:'white',
                    padding:16,backgroundColor:'#000435', 
                    borderRadius:5,
                    fontSize:16,
              }}/>

             {/*BUTTON*/ } 
                <Button title="Add Task"
                onPress={createTask} />



        </View>
    )



}