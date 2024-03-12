import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tab() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <StatusBar style='light' />
      <Image
        source={require('@assets/images/background.png')}
        style={styles.bgImg}
      />
      <Text>Tab [Home|Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
