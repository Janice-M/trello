import { Stack } from 'expo-router';
import {View, Text} from  'react-native';


const TaskDetails = () => {
    return (
        <View style ={{padding: 15}}>
            <Stack.Screen options={{title : "Task Details"}} />
            <Text style={{ color:'white', fontSize:20 }}>
                details of the chihuahua
            </Text>
        </View>
    );
};


export default TaskDetails;