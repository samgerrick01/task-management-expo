import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { ZoomOut } from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' hidden />
      <AnimatedLottieView
        exiting={ZoomOut}
        ref={animation}
        autoPlay
        loop={false}
        onAnimationFinish={(isCancelled) => onAnimationFinish(isCancelled)}
        style={styles.lottie}
        source={require('@assets/animation/task.json')}
      />
    </View>
  );
};

export default AnimatedSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: '80%',
    maxWidth: 400,
    height: 400,
  },
});
