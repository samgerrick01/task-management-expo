import { ITask } from '@/utils/interface';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { RightActions } from './RightActions';
import { DataContext } from '@/context';
import { deleteMyTodoItem } from '@/firebase/delete';
import { updatePrioItem, updateStatusItem } from '@/firebase/update';

const SingleTask = (props: ITask) => {
  const { tasks, setTasks } = useContext(DataContext);

  const pressRef = useRef<Swipeable>(null);

  const deleteMyTodo = async () => {
    try {
      const updatedTasks = tasks.filter((t) => t.docId !== props.docId);
      setTasks(updatedTasks);
      await deleteMyTodoItem(props.docId);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleEdit = () => {
    console.warn('Edit');
  };

  const checkAsPrio = async () => {
    try {
      const index = tasks.findIndex((task) => task.docId === props.docId);
      const updatedTasks = [...tasks];
      updatedTasks[index].priority = !updatedTasks[index].priority;
      setTasks(updatedTasks);
      await updatePrioItem(props.docId, !props.priority);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const checkAsComplete = async () => {
    try {
      const index = tasks.findIndex((task) => task.docId === props.docId);
      const updatedTasks = [...tasks];
      updatedTasks[index].status = !updatedTasks[index].status;
      setTasks(updatedTasks);
      await updateStatusItem(props.docId, !props.status);
      if (!props.priority) return;
      checkAsPrio();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Swipeable
      ref={pressRef}
      friction={3}
      leftThreshold={80}
      rightThreshold={40}
      renderRightActions={(dragAnimatedValue) => (
        <RightActions
          dragAnimatedValue={dragAnimatedValue}
          onDelete={deleteMyTodo}
          onEdit={handleEdit}
          onPrio={checkAsPrio}
          isPriority={props.priority}
          isCompleted={props.status}
          close={() => pressRef.current?.close()}
          id={props.docId}
        />
      )}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          backgroundColor: '#f5f5f5',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          margin: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            width: '80%',
            alignItems: 'center',
          }}
        >
          <Pressable onPress={checkAsComplete}>
            <MaterialCommunityIcons
              name={
                props.status
                  ? 'checkbox-marked-circle-outline'
                  : 'checkbox-blank-circle-outline'
              }
              size={28}
              color={props.status ? 'teal' : 'gray'}
            />
          </Pressable>
          <Text
            style={props.status ? styles.textDone : styles.textNormal}
            numberOfLines={1}
          >
            {props.title}
          </Text>
        </View>
        {props.priority && (
          <AntDesign name='exclamationcircle' size={24} color='#e12f28' />
        )}
      </View>
    </Swipeable>
  );
};

export default SingleTask;

const styles = StyleSheet.create({
  textNormal: {
    fontSize: 18,
    fontFamily: 'Mulish',
  },
  textDone: {
    fontSize: 18,
    fontFamily: 'Mulish',
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
