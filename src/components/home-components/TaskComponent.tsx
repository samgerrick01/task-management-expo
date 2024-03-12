import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import SingleTask from './SingleTask';
import { router } from 'expo-router';

const TaskComponent = () => {
  const [selected, setSelected] = useState<
    'all' | 'todo' | 'complete' | 'priority'
  >('all');

  const mockdata = [
    { id: 1, title: 'Task 1', status: true, priority: false, comments: [] },
    {
      id: 2,
      title:
        'Task 2 Task 2 Task 2 Task 2 Task 2 Task 2 Task 2 Task 2 Task 2 Task 2',
      status: false,
      priority: false,
      comments: [],
    },
    { id: 3, title: 'Task 3', status: false, priority: true, comments: [] },
    { id: 4, title: 'Task 4', status: true, priority: false, comments: [] },
    { id: 5, title: 'Task 5', status: false, priority: true, comments: [] },
    { id: 6, title: 'Task 1', status: false, priority: false, comments: [] },
    { id: 7, title: 'Task 2', status: true, priority: false, comments: [] },
    { id: 8, title: 'Task 3', status: false, priority: false, comments: [] },
    { id: 9, title: 'Task 4', status: true, priority: false, comments: [] },
  ];

  const sortedData = mockdata.sort((a, b) => {
    if (a.priority === b.priority) {
      return 0;
    }
    if (a.priority) {
      return -1;
    }
    if (b.priority) {
      return 1;
    }
    return 0;
  });

  const filteredTasks = useMemo(() => {
    if (selected === 'all') {
      return sortedData;
    } else if (selected === 'todo') {
      return sortedData.filter((task) => !task.status);
    } else if (selected === 'priority') {
      return sortedData.filter((task) => task.priority);
    } else {
      return sortedData.filter((task) => task.status);
    }
  }, [sortedData, selected]);

  return (
    <View style={styles.container2}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        <Pressable
          //   onPress={() => router.push('/add-task')}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            gap: 5,
          }}
        >
          <Text>Add Task</Text>
          <AntDesign name='pluscircle' size={24} color='#deb176' />
        </Pressable>

        <Picker
          style={{
            alignItems: 'center',
            height: 50,
            width: 150,
          }}
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
        >
          <Picker.Item label='All Tasks' value='all' />
          <Picker.Item label='Todo' value='todo' />
          <Picker.Item label='Complete' value='complete' />
          <Picker.Item label='Priority' value='priority' />
        </Picker>
      </View>
      <SafeAreaView style={{ paddingBottom: 40 }}>
        <FlatList
          data={filteredTasks}
          renderItem={({ item }) => <SingleTask {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

export default TaskComponent;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    paddingVertical: 20,
  },
});
