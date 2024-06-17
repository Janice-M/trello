import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import TaskListItem from './src/components/TaskListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskListItem />
      <StatusBar style="auto" />
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
