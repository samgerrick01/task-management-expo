import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getAuth } from 'firebase/auth';
import app from 'firebaseConfig';

const index = () => {
  const user = getAuth(app).currentUser;
  return (
    <View>
      <Text>{user?.displayName}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
