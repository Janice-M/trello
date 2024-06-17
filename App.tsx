import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import TaskListItem from './src/components/TaskListItem';
import TaskList from './src/components/TaskList';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{padding: 10 }}>
      <TaskList />
      <TaskListItem task={{description: 'First Task'}}/>
      <TaskListItem task={{description: 'Second Task'}}/>
      <TaskListItem task={{description: 'Third Task'}}  />
      <TaskListItem task={{description: 'Fourth Task'}} />
      </View>
      

      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,

  
  },
});
