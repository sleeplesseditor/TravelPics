import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/AuthScreen";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlaceScreen";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlaceScreen";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetailScreen";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "TravelPics.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TravelPics.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TravelPics.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TravelPics.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TravelPics.SideDrawer",
  () => SideDrawer,
  store,
  Provider
);

// Start a App
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "TravelPics.AuthScreen",
    title: "Login"
  }
});
