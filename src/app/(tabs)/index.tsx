import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { getAuth } from 'firebase/auth';
import app from 'firebaseConfig';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import ChartComponents from '@/components/home-components/ChartComponents';
import TaskComponent from '@/components/home-components/TaskComponent';

const index = () => {
  const user = getAuth(app).currentUser;
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

      <TaskComponent />
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
