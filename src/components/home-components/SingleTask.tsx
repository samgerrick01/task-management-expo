import { ITask } from '@/utils/interface';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SingleTask = (props: ITask) => {
  return (
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
        <Pressable onPress={() => {}}>
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
        <Text style={{ fontSize: 14, fontFamily: 'Mulish' }} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
      {props.priority && (
        <AntDesign name='exclamationcircle' size={24} color='#e12f28' />
      )}
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({});
