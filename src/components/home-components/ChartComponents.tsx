import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  FontAwesome,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

const ChartComponents = () => {
  return (
    <View style={styles.container1}>
      {/* 1st column */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[styles.cardUpper, { backgroundColor: '#301ca3' }]}>
          <FontAwesome
            style={{ alignSelf: 'flex-end' }}
            name='list-alt'
            size={24}
            color='white'
          />
          <Text style={styles.cardUpperText}>14</Text>
          <Text style={styles.cardUpperText}>All Task</Text>
        </View>
        <View style={[styles.cardUpper, { backgroundColor: '#deb176' }]}>
          <Ionicons
            style={{ alignSelf: 'flex-end' }}
            name='code-working'
            size={24}
            color='white'
          />
          <Text style={styles.cardUpperText}>14</Text>
          <Text style={styles.cardUpperText}>To do</Text>
        </View>
      </View>
      {/* 2nd column */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[styles.cardUpper, { backgroundColor: '#2cad49' }]}>
          <FontAwesome5
            style={{ alignSelf: 'flex-end' }}
            name='calendar-check'
            size={24}
            color='white'
          />
          <Text style={styles.cardUpperText}>14</Text>
          <Text style={styles.cardUpperText}>Complete</Text>
        </View>
        <View style={[styles.cardUpper, { backgroundColor: '#e12f28' }]}>
          <MaterialIcons
            style={{ alignSelf: 'flex-end' }}
            name='priority-high'
            size={24}
            color='white'
          />
          <Text style={styles.cardUpperText}>14</Text>
          <Text style={styles.cardUpperText}>Priority</Text>
        </View>
      </View>
    </View>
  );
};

export default ChartComponents;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    // backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardUpper: {
    width: '45%',
    backgroundColor: 'purple',
    borderRadius: 20,
    height: 140,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardUpperText: {
    fontSize: 24,
    fontFamily: 'MulishBold',
    color: 'white',
  },
});
