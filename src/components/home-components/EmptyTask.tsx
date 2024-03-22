import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Empty({ selected }: { selected: string }) {
  return (
    <View style={styles.empty}>
      <FontAwesome5 name='scroll' size={44} color='teal' />
      <Text style={{ color: 'gray', marginTop: 15, fontStyle: 'italic' }}>
        No item in your {selected === 'all' ? 'tasks' : selected} list.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
