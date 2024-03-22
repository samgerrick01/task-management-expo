import { DataContext } from '@/context';
import { sortItemsByPrio } from '@/utils/sortTasks';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useContext, useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SingleTask from './SingleTask';
import EmptyTask from './EmptyTask';
import { ActivityIndicator } from 'react-native-paper';

interface IProps {
  openAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  getLoading: boolean;
}

const TaskComponent = (props: IProps) => {
  const [selected, setSelected] = useState<
    'all' | 'todo' | 'complete' | 'priority'
  >('all');

  const { tasks } = useContext(DataContext);

  const sortedTask = useMemo(() => {
    return sortItemsByPrio(tasks);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (selected === 'all') {
      return sortedTask;
    } else if (selected === 'todo') {
      return sortedTask.filter((task) => !task.status);
    } else if (selected === 'priority') {
      return sortedTask.filter((task) => task.priority);
    } else {
      return sortedTask.filter((task) => task.status);
    }
  }, [sortedTask, selected]);

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
          onPress={() => props.openAddTask(true)}
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
        {props.getLoading && (
          <View style={{ marginTop: '25%' }}>
            <ActivityIndicator size={50} color='blue' />
          </View>
        )}
        {!props.getLoading && (
          <FlatList
            data={filteredTasks}
            renderItem={({ item }) => <SingleTask {...item} />}
            keyExtractor={(item) => item.docId}
            ListEmptyComponent={<EmptyTask selected={selected} />}
          />
        )}
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
