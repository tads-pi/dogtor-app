import "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack";
import { KeyboardAvoidingView, Platform } from "react-native";
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import routes from "./src/routes"
import TelaLogin from "./src/pages/TelaLogin"
import TelaMenu from "./src/pages/TelaMenu";

export default function App() {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name={routes.TELA_LOGIN} component={TelaLogin}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={routes.TELA_MENU} component={TelaMenu}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}