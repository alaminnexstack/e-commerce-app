import { Platform } from "react-native";

// config.js
const localhost = "http://localhost:8000";
const emulator = "http://10.0.2.2:8000";
const mobileDevice = "http://192.168.0.164:8000";

const isBrowser = typeof window !== "undefined";

const baseURL = "http://192.168.0.164:8000";
//   Platform.OS === "android"
//     ? emulator // Android Emulator
//     : mobileDevice; // iOS or real device

export default baseURL;
