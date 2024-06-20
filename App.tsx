import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import TaskListItem from './src/components/TaskListItem';

import Taskboard from './src/components/TaskBoard';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Taskboard />
      

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,

  
  },
});
