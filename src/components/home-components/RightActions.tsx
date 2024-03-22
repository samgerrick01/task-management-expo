import { router } from 'expo-router';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

interface RightActionsProps {
  dragAnimatedValue: Animated.AnimatedInterpolation<string | number>;
  onDelete: () => void;
  onEdit: () => void;
  onPrio: () => void;
  isPriority: boolean;
  isCompleted: boolean;
  close: () => void;
  id: string;
}

export const RightActions = (props: RightActionsProps) => {
  const animatedStyles = {
    transform: [
      {
        translateX: props.dragAnimatedValue.interpolate({
          inputRange: [-10, 0],
          outputRange: [0, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        marginRight: 10,
      }}
    >
      <AnimatedView style={animatedStyles}>
        <Pressable
          onPress={() => {
            props.close();
            router.push(`/more/${props.id}`);
          }}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'orange',
            paddingHorizontal: 20,
            flex: 1,
          }}
        >
          <Text style={styles.rightActionText}>More</Text>
        </Pressable>
      </AnimatedView>
      {!props.isCompleted && (
        <AnimatedView style={animatedStyles}>
          <Pressable
            onPress={() => {
              props.onPrio();
              props.close();
            }}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: 'red',
              paddingHorizontal: 20,
              flex: 1,
            }}
          >
            <Text style={styles.rightActionText}>
              {props.isPriority ? 'Unpin' : 'Pin'}
            </Text>
          </Pressable>
        </AnimatedView>
      )}
      <AnimatedView style={animatedStyles}>
        <Pressable
          onPress={props.onDelete}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'crimson',
            paddingHorizontal: 20,
            flex: 1,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={styles.rightActionText}>Delete</Text>
        </Pressable>
      </AnimatedView>
    </View>
  );
};

const styles = StyleSheet.create({
  rightActionText: {
    color: 'white',
  },
});
