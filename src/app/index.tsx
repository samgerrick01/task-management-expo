import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Icons & Images
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/background.png')}
        style={styles.bgImg}
      />
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={styles.titleWrapper}
      >
        <Text style={styles.titleText}>Task Management</Text>
      </Animated.View>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        style={styles.titleWrapper}
      >
        <Text style={styles.titleText}>App</Text>
      </Animated.View>
      <LottieView
        autoPlay
        loop={true}
        style={{
          width: '100%',
          maxWidth: 400,
          height: 400,
        }}
        source={require('@assets/animation/register.json')}
      />

      <Animated.View entering={FadeInDown.duration(1000).springify()}>
        <Link href={`/login`} asChild>
          <TouchableOpacity style={styles.btnWrapper}>
            <Text style={styles.text}>Let's Begin</Text>
            <AntDesign name='rightcircle' size={24} color='white' />
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bgImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  btnWrapper: {
    backgroundColor: '#2ba1dd',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'MulishItalic',
    fontSize: 24,
    color: '#fff',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontFamily: 'MulishBold',
    fontSize: 36,
  },
});
