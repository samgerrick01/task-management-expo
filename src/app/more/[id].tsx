import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { DataContext } from '@/context';
import { ITask } from '@/utils/interface';
import { updateItemComment, updateItemText } from '@/firebase/update';
import { AntDesign } from '@expo/vector-icons';
import InputModal from '@/shared/InputModal';
import EmptyComment from '@/components/home-components/EmptyComment';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const { tasks, setTasks } = useContext(DataContext);

  const data = tasks.filter((task) => task.docId === id)[0];
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(data.title);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [textLoading, setTextLoading] = useState<boolean>(false);

  const handleEdit = async () => {
    if (editText === data.title || !editText) {
      setIsEdit(false);
      return;
    }
    try {
      setLoading(true);
      const index = tasks.findIndex((task) => task.docId === data.docId);
      const updatedTasks = [...tasks];
      updatedTasks[index].title = editText;
      setTasks(updatedTasks);

      await updateItemText(data.docId, editText);
      setIsEdit(false);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async () => {
    if (!inputText) return;

    try {
      setTextLoading(true);
      const index = tasks.findIndex((task) => task.docId === data.docId);
      const updatedTasks = [...tasks];
      updatedTasks[index].comments = [...data.comments, inputText];
      setTasks(updatedTasks);
      await updateItemComment(data.docId, updatedTasks[index].comments);
      setInputText('');
    } catch (error: any) {
      alert(error.message);
    } finally {
      setTextLoading(false);
      setOpenModal(false);
    }
  };

  const handleDeleteComment = async (value: number) => {
    try {
      const index = tasks.findIndex((task) => task.docId === data.docId);
      const updatedTasks = [...tasks];
      updatedTasks[index].comments = updatedTasks[index].comments.filter(
        (item, index) => index !== value
      );
      setTasks(updatedTasks);
      await updateItemComment(data.docId, updatedTasks[index].comments);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.main}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style='light' />
      <Image
        source={require('@assets/images/background.png')}
        style={styles.bgImg}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
      >
        <Entypo
          onPress={() => router.back()}
          name='arrow-left'
          size={30}
          color='white'
        />
        <Text style={styles.titleText}>Task Details</Text>
      </View>

      <View style={styles.cardContainer}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'MulishBold',
            marginVertical: 10,
          }}
        >
          Task Title:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
          }}
        >
          {isEdit ? (
            <TextInput
              style={{
                borderWidth: 1,
                padding: 10,
                fontSize: 20,
                width: '70%',
                borderRadius: 5,
                fontFamily: 'Mulish',
              }}
              value={editText}
              onChangeText={(text) => setEditText(text)}
              autoFocus
            />
          ) : (
            <Text
              numberOfLines={1}
              style={{ fontSize: 20, maxWidth: '70%', fontFamily: 'Mulish' }}
            >
              {data.title}
            </Text>
          )}

          {isEdit ? (
            <Pressable
              onPress={handleEdit}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              {loading ? (
                <ActivityIndicator color='black' size={24} />
              ) : (
                <Text style={{ fontSize: 20 }}>Save</Text>
              )}
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setIsEdit(true)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 20 }}>Edit</Text>
            </Pressable>
          )}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'MulishBold',
              marginVertical: 10,
            }}
          >
            Comments:
          </Text>
          <Pressable
            onPress={() => setOpenModal(true)}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: 5,
            }}
          >
            <Text>Add Comment</Text>
            <AntDesign name='pluscircle' size={24} color='#deb176' />
          </Pressable>
        </View>

        <SafeAreaView style={{ flex: 1, padding: 10 }}>
          <FlatList
            data={data.comments}
            ListEmptyComponent={EmptyComment}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.commentFlatList}>
                <Text numberOfLines={1} style={styles.commentText}>
                  {item}
                </Text>
                <Pressable onPress={() => handleDeleteComment(index)}>
                  <FontAwesome name='remove' size={24} color='red' />
                </Pressable>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
      <InputModal
        title='Add Comment'
        visible={openModal}
        close={setOpenModal}
        inputText={inputText}
        setInputText={setInputText}
        loading={textLoading}
        handleAdd={handleAddComment}
      />
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 40,
  },
  bgImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  titleText: {
    paddingLeft: 20,
    fontSize: 24,
    fontFamily: 'MulishBold',
    color: 'white',
  },
  cardContainer: {
    backgroundColor: 'white',
    flex: 1,
    margin: 15,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  commentFlatList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'wheat',
  },
  commentText: {
    fontSize: 18,
    fontFamily: 'Mulish',
    width: '80%',
  },
});
