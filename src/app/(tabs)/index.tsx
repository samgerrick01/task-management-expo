import ChartComponents from '@/components/home-components/ChartComponents';
import TaskComponent from '@/components/home-components/TaskComponent';
import { DataContext } from '@/context';
import { createTask } from '@/firebase/create';
import { fetchOnlyMyTaskList } from '@/firebase/read';
import InputModal from '@/shared/InputModal';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { getAuth } from 'firebase/auth';
import app from 'firebaseConfig';
import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const index = () => {
  const user = getAuth(app).currentUser;

  const { tasks, setTasks } = useContext(DataContext);

  const [inputText, setInputText] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [getLoading, setGetLoading] = useState<boolean>(false);

  const handleAddTask = async () => {
    if (!inputText) {
      return;
    } else {
      try {
        setLoading(true);
        if (!user) return;
        const addedTask = await createTask({
          title: inputText,
          ownerId: user?.uid,
          status: false,
          priority: false,
          comments: [],
          id: tasks.length + 1,
        });

        const todoItem = {
          completed: false,
          title: inputText,
          ownerId: user?.uid,
          docId: addedTask.id,
        };
        setTasks(() => [todoItem, ...tasks]);
        fetchMyTaskList();
        setInputText('');
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
        setOpenModal(false);
      }
    }
  };

  async function fetchMyTaskList() {
    setGetLoading(true);
    if (!user) return;
    const result = await fetchOnlyMyTaskList(user.uid);
    const myTasks = result.docs.map((d) => ({ docId: d.id, ...d.data() }));
    setTasks(myTasks);
    setGetLoading(false);
  }

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      fetchMyTaskList();
    }
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar style='light' />
      <Image
        source={require('@assets/images/background.png')}
        style={styles.bgImg}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.titleText}>Hello </Text>
        <Text style={styles.nameText}>{user?.displayName}</Text>
      </View>

      <ChartComponents />

      <TaskComponent getLoading={getLoading} openAddTask={setOpenModal} />

      <InputModal
        title='Add Task'
        visible={openModal}
        close={setOpenModal}
        inputText={inputText}
        setInputText={setInputText}
        handleAdd={handleAddTask}
        loading={loading}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 40,
  },
  titleText: {
    paddingLeft: 20,
    fontSize: 24,
    fontFamily: 'MulishBold',
    color: 'white',
  },
  nameText: {
    fontSize: 24,
    fontFamily: 'MulishItalic',
    color: 'white',
  },
  bgImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
