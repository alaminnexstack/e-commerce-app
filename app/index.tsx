import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={true} />
      <ImageBackground
        source={require("../assets/images/ecommerce-splash.jpg")}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.95)"]}
          style={styles.gradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Welcome to E-Shop</Text>
              <Text style={styles.subtitle}>
                Your One-Stop Shopping Destination
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Link href="/signin" asChild>
                <TouchableOpacity style={styles.mainButton}>
                  <Text style={styles.mainButtonText}>Get Started</Text>
                </TouchableOpacity>
              </Link>

              <View style={styles.socialButtonsContainer}>
                <Text style={styles.orText}>Or continue with</Text>

                <View style={styles.socialButtons}>
                  <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="google" size={20} color="#fff" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="facebook" size={20} color="#fff" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="github" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  contentContainer: {
    height: height * 0.5,
    justifyContent: "space-between",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    opacity: 0.8,
  },
  buttonContainer: {
    gap: 20,
  },
  mainButton: {
    backgroundColor: "#FF4B4B",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  socialButtonsContainer: {
    alignItems: "center",
    gap: 15,
  },
  orText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
});
