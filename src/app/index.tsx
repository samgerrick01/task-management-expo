import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

//Icons & Images
import banner from "@assets/images/banner.png";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.logo} resizeMode="contain" />

      <Link href={`/splash-screen`} asChild>
        <TouchableOpacity style={styles.btnWrapper}>
          <Text style={styles.text}>Let's Begin</Text>
          <AntDesign name="rightcircle" size={24} color="white" />
        </TouchableOpacity>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  btnWrapper: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: "center",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "MulishItalic",
    fontSize: 24,
    color: "#fff",
  },
  logo: {
    marginBottom: 40,
    width: "100%",
    alignSelf: "center",
    transform: [{ rotate: "-10deg" }],
  },
});
