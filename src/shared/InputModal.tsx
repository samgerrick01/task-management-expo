import { IModal } from '@/utils/interface';
import { AntDesign } from '@expo/vector-icons';
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
            style={styles.textInput}
            value={props.inputText}
            onChangeText={(text) => props.setInputText(text)}
          />

          <Pressable style={styles.btnContainer} onPress={props.handleAdd}>
            {props.loading ? (
              <ActivityIndicator color='white' size={24} />
            ) : (
              <Text style={styles.btnText}>Submit</Text>
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
  btnContainer: {
    width: '100%',
    backgroundColor: 'skyblue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'MulishBold',
    color: 'white',
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 8,
  },
});
