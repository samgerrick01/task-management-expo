import { IModal } from '@/utils/interface';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Modal as RNModal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const AddModal = (props: IModal) => {
  return (
    <RNModal
      visible={props.visible}
      statusBarTranslucent={true}
      transparent={true}
      animationType='slide'
    >
      <View style={styles.content}>
        <View style={styles.card}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.title}>{props.title}</Text>
            <AntDesign
              onPress={() => props.close(false)}
              name='closesquareo'
              size={24}
              color='black'
            />
          </View>

          <TextInput
            placeholder='Enter text here...'
            style={{
              borderWidth: 1,
              height: 50,
              padding: 10,
              borderRadius: 8,
            }}
            value={props.inputText}
            onChangeText={(text) => props.setInputText(text)}
          />

          <Pressable
            style={{
              width: '100%',
              backgroundColor: 'skyblue',
              padding: 10,
              marginVertical: 10,
              borderRadius: 8,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={props.handleAdd}
          >
            {props.loading ? (
              <ActivityIndicator color='white' size={24} />
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'MulishBold',
                  color: 'white',
                }}
              >
                Submit
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </RNModal>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 12,
  },
  desc: {
    fontSize: 18,
    lineHeight: 24,
    opacity: 0.7,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnOk: {
    marginTop: 24,
    width: '48%',
    backgroundColor: '#79d2d1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
  },
  buttonCLose: {
    marginTop: 24,
    backgroundColor: '#ff6666',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
});
