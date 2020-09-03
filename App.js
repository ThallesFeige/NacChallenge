import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


//importações do React Navigation
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


//módulo do Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//biblioteca de icones
import { Ionicons } from '@expo/vector-icons';

//módulo do Navigation Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';


//uso de Hooks para criação de objetos
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//header da home 
// CABEÇALHO <<<<<<<
function LogoTitle() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.titulo}>Dorgan</Text>
            <Image
                style={{ width: 20, height: 35, marginTop: 5, marginLeft: 2 }}
                source={require('./images/heartAlpha.jpg')}
            />

            <Ionicons type="button" name="md-settings"
                style={styles.button}

                title='Configurações'
                onPress={() => navigation.navigate('config')}

            />


        </View>
    );
}

// TELA DE CONFIGURAÇÃO  <<<<<<<<
function ConfigScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="config"
                options={
                    { headerTitle: props => <LogoTitle /> }}>
                {props =>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Em processo :o </Text>
                    </View>
                }
            </Stack.Screen>
        </Stack.Navigator>
    );
}

// TELA DE DEPOIMENTO <<<<<<<<<
function DepoimentosScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Depoimentos"
                options={
                    { headerTitle: props => <LogoTitle /> }}>
                {props =>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Em processo :o </Text>
                    </View>
                }
            </Stack.Screen>
        </Stack.Navigator>
    );
}

// TELA DE JUNTE-SE A CAUSA <<<<<<<<<
function JunteSeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Junte-se a causa"
                options={
                    { headerTitle: props => <LogoTitle /> }}>
                {props =>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Em processo :)</Text>
                    </View>
                }
            </Stack.Screen>
        </Stack.Navigator>
    );
}

// TELA DE DUVIDAS <<<<<<<<<
function DuvidasScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="duvidas"
                options={
                    { headerTitle: props => <LogoTitle /> }}>
                {props =>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Em Processo :)</Text>
                    </View>
                }
            </Stack.Screen>
        </Stack.Navigator>
    );
}
// TELA INICIAL COM O CHAT <<<<<<<<<
function InicialScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="inicial"
                options={
                    { headerTitle: props => <LogoTitle /> }}>
                {props =>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Em Processo :)</Text>
                        <Image
                            style={{ width: 250, height: 350 }}
                            source={require('./images/chat.png')}
                        />
                    </View>
                }
            </Stack.Screen>
        </Stack.Navigator>
    );
}


function PrincipalStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Home'
                options={{ headerTitle: props => <LogoTitle /> }}>
                {props => <InicialScreen />}
            </Stack.Screen>

            <Stack.Screen
                name='config'
                options={{ title: 'Tela de configuração' }}>
                {props => <ConfigScreen />}
            </Stack.Screen>

            <Stack.Screen
                name='Depoi'
                options={{ title: 'Depoimentos' }}>
                {props => <DepoimentosScreen />}
            </Stack.Screen>

            <Stack.Screen
                name='JunteSe'
                options={{ title: 'Junte-se a causa' }}>
                {props => <JunteSeScreen />}
            </Stack.Screen>

            <Stack.Screen
                name='Duvidas'
                options={{ title: 'Chat Duvidas' }}>
                {props => <DuvidasScreen />}
            </Stack.Screen>

        </Stack.Navigator>

    );
}

//renderiza os botões inferiores (MENU) <<<<<<<
function AppBottonTab({ routeName }) {
    return (
        <Tab.Navigator
            initialRouteName={routeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Depoimentos') {
                        iconName = 'ios-videocam';
                    }
                    else if (route.name === 'config') {
                        iconName = focused ? 'md-settings' : 'md-settings';
                    }
                    else if (route.name === 'Junte-se a causa') {
                        iconName = focused ? 'ios-people' : 'ios-people';
                    }
                    else if (route.name === 'Dúvidas') {
                        iconName = focused ? 'ios-help-circle-outline' : 'ios-help-circle-outline';
                    }
                    else if (route.name === 'Inicial') {
                        iconName = focused ? 'ios-home' : 'ios-home';
                    }

                    // Qualquer componente pode ser usado
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'blue',
            }}
        >
            <Tab.Screen name="Inicial" component={PrincipalStack} />
            <Tab.Screen name="Depoimentos" component={DepoimentosScreen} />
            <Tab.Screen name="Junte-se a causa" component={JunteSeScreen} />
            <Tab.Screen name="Dúvidas" component={DuvidasScreen} />

        </Tab.Navigator>

    );
}

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator>

                    <Drawer.Screen name='inicial'>
                        {props => <AppBottonTab routeName='inicial' />}
                    </Drawer.Screen>

                    <Drawer.Screen name='config'>
                        {props => <AppBottonTab routeName='config' />}
                    </Drawer.Screen>

                    <Drawer.Screen name='Depoimentos'>
                        {props => <AppBottonTab routeName='Depoimentos' />}
                    </Drawer.Screen>

                    <Drawer.Screen name='Junte-se a causa'>
                        {props => <AppBottonTab routeName='Junte-se a causa' />}
                    </Drawer.Screen>

                    <Drawer.Screen name='Dúvidas'>
                        {props => <AppBottonTab routeName='Dúvidas' />}
                    </Drawer.Screen>

                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
} export default App

const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titulo: {
        margin: 1,
        marginTop: 6,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "blue",
    },
    button: {
        color: 'black',
        fontSize: 28,
        width: 150,
        marginTop: 6,
        marginHorizontal: 150,
        paddingHorizontal: 10,
        textAlign: 'center',
        alignSelf: 'center',
        activeTintColor: 'black',
    },
});