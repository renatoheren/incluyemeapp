import NetInfo from "@react-native-community/netinfo";

export default checkInternet = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });