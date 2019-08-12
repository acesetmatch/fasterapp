import { createStackNavigator } from "react-navigation";
import SignInScreen from "../screens/SignInScreen/SignInScreen";

const AuthNavigator = createStackNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    SignUp: {
      // `ProfileScreen` is a React component that will be the main content of the screen.
      screen: SignInScreen,
      // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
      navigationOptions: ({ navigation }: any) => ({
        title: `Sign in`
      })
    }
  },
  {
    mode: "modal"
  }
);

export default AuthNavigator;
