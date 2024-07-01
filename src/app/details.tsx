import { Stack } from 'expo-router';
import {View, Text} from  'react-native';


const TaskDetails = () => {
    return (
        <View>
            <Stack.Screen options={{title : "Task Details"}} />
            <Text>
                details
            </Text>
        </View>
    );
};


export default TaskDetails;