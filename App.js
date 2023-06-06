import React from 'react';
import AuthProvider from './context/auth';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import routes from "./src/routes"
import TelaLogin from "./src/pages/TelaLogin"
import TelaMenu from "./src/pages/TelaMenu";
import AppointmentProvider from './context/appoiment';
import TelaCadastroInfoPessoais from './src/pages/FluxoCadastro/TelaCadastroInfomacoesPessoais';
import TelaCadastroEndereco from './src/pages/FluxoCadastro/TelaCadastroEndereco';
import TelaCadastroDadosAcesso from './src/pages/FluxoCadastro/TelaCadastroDadosDeAcesso';
import SecondStep from './src/pages/Appointment/SecondStep/SecondStep';
import DetalhesPet from './src/pages/DetalhesPet';
import Notifications from './src/pages/Notifications';
import SixthStep from './src/pages/Appointment/SixthStep';
import SeventhStep from './src/pages/Appointment/SeventhStep';
import FifthStep from './src/pages/Appointment/FifthStep';
import FourthStep from './src/pages/Appointment/FourthStep';
import PetFirstStep from './src/pages/FluxoCadastroPet/FirstStep';
import PetSecondStep from './src/pages/FluxoCadastroPet/SecondStep';
import FirstStep from './src/pages/Appointment/FirstStep';
import PetThirdStep from './src/pages/FluxoCadastroPet/ThridStep';
import "react-native-url-polyfill/auto"

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootSiblingParent>
          <AuthProvider>
            <AppointmentProvider>
              <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#F2F2F2",
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
              }}>
                <View style={{
                  flex: 1,
                  // DEBUG MODE
                  // borderColor: "red",
                  // borderWidth: 3
                }}>
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
                    <Stack.Screen
                      name={routes.TELA_CADASTRO_INFO_PESSOAIS} component={TelaCadastroInfoPessoais}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={routes.TELA_CADASTRO_ENDERECO} component={TelaCadastroEndereco}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={routes.TELA_CADASTRO_DADOS_ACESSO} component={TelaCadastroDadosAcesso}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={routes.FLUXO_AGENDAMENTO_1} component={FirstStep}
                      options={{
                        headerShown: false,
                      }}
                    />

                    <Stack.Screen
                      name={routes.FLUXO_AGENDAMENTO_2} component={SecondStep}
                      options={{
                        headerShown: false,
                      }}
                    />

                    <Stack.Screen
                      name={routes.FLUXO_AGENDAMENTO_4} component={FourthStep}
                      options={{
                        headerShown: false,
                      }}
                    />

                    <Stack.Screen
                      name={routes.FLUXO_AGENDAMENTO_5} component={FifthStep}
                      options={{
                        headerShown: false,
                      }}
                    />

                    <Stack.Screen
                      name={routes.FLUXO_AGENDAMENTO_6} component={SixthStep}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={routes.FLUXO_AGENDAMENTO_7} component={SeventhStep}
                      options={{
                        headerShown: false,
                      }}
                    />

                    <Stack.Screen
                      name={routes.FLUXO_CADASTRO_PET_1} component={PetFirstStep}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={routes.FLUXO_CADASTRO_PET_2} component={PetSecondStep}
                      options={{
                        headerShown: false,
                      }}
                    />

                    <Stack.Screen
                      name={routes.FLUXO_CADASTRO_PET_3} component={PetThirdStep}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={routes.DETALHES_PET} component={DetalhesPet}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={routes.TELA_NOTIFICACOES} component={Notifications}
                      options={{
                        headerShown: false,
                      }}
                    />
                  </Stack.Navigator>
                </View>
              </SafeAreaView>
            </AppointmentProvider>
          </AuthProvider>
        </RootSiblingParent>
      </SafeAreaProvider>
    </NavigationContainer >
  );
}