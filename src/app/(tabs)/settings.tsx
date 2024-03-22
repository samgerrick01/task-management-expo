import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { getAuth } from 'firebase/auth';
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Tab() {
  const auth = getAuth();
  const handleMyPortfolio = () => {
    Linking.openURL('https://samgerrickdesilva.com');
  };
  return (
    <View style={styles.main}>
      <StatusBar style='light' />
      <Image
        source={require('@assets/images/background.png')}
        style={styles.bgImg}
      />
      <View style={styles.cardWrapper}>
        <Text style={styles.introText}>
          Hello! I'm{' '}
          <Text style={{ fontFamily: 'MulishBold' }}>Sam Gerrick</Text> a
          passionate React Native developer with a knack for crafting dynamic
          and engaging mobile applications. With a solid foundation in{' '}
          <Text style={{ fontFamily: 'MulishBold' }}>
            JavaScript/TypeScript
          </Text>{' '}
          and <Text style={{ fontFamily: 'MulishBold' }}>React</Text>, I
          specialize in leveraging the power of React Native to build
          cross-platform solutions that deliver seamless user experiences. From
          concept to deployment, I thrive on turning ideas into reality,
          utilizing my skills in UI/UX design, state management, and API
          integration to create robust and scalable mobile applications. Let's
          collaborate and bring your vision to life!
        </Text>
      </View>

      <View style={{ flexDirection: 'column', width: '100%' }}>
        <Pressable style={styles.portfolioBtn} onPress={handleMyPortfolio}>
          <Text style={styles.signOutText}>View my Portfolio</Text>
        </Pressable>
        <Pressable
          style={[styles.portfolioBtn, { backgroundColor: '#0e86d4' }]}
          onPress={() => {
            auth.signOut();
            router.navigate('/login');
          }}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bgImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  cardWrapper: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  portfolioBtn: {
    backgroundColor: 'teal',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  introText: {
    fontFamily: 'Mulish',
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  signOutText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
