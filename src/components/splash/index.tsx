import LottieView from "lottie-react-native";
import { useRef } from "react";
import { View } from "react-native";
import Animated, { ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <LottieView
        ref={animation}
        autoPlay
        loop={false}
        onAnimationFinish={(isCancelled) => onAnimationFinish(isCancelled)}
        style={{
          width: 400,
          height: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/animation/netflix.json")}
      />
    </View>
  );
};

export default AnimatedSplashScreen;
