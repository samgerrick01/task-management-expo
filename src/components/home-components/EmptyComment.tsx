import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Empty() {
  return (
    <View style={styles.empty}>
      <FontAwesome5 name='scroll' size={44} color='teal' />
      <Text style={{ color: 'gray', marginTop: 15, fontStyle: 'italic' }}>
        No item in your comment list.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
