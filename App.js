import React,{Component} from 'react';
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
import {createDrawerNavigator} from '@react-navigation/drawer';


//uso de Hooks para criação de objetos
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//header da home
function LogoTitle() {
  //uso do navigation para acionar o Drawer
  const navigation = useNavigation();
  
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
    <Text style={styles.titulo}>Dorgan</Text>
      <Image
        style={{ width: 35, height: 35 }}
        source={require('./images/heart.jpg')}
      />
      <Button style={styles.button}
        title='Configurações'
        onPress={() => navigation.navigate('config')}
      />
      
    
    </View>
  );
}

function TelaConfig() {
  //objeto de controle de navegação
  const navigation = useNavigation();

  //recebendo dados da tela anterior
  return(
    <View>
      <Text style={styles.paragraph}>Em progresso :)</Text>
     
    </View>
    //  <Button
    //     title='Voltar'
    //     onPress={() => navigation.goBack()}      COLOCAR DENTRO DA VIEW SE FOR USAR
    //   />
  );
}


function DepoimentosScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Depoimentos"
        options={
          {headerTitle: props => <LogoTitle/>}}>
          {props => 
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Em processo :o </Text>
               </View>  
          }
      </Stack.Screen>
    </Stack.Navigator>
  );
}
//função que retorna stack referente a opções
function JunteSeScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="junte"
        options={
          {headerTitle: props => <LogoTitle/>}}>
          {props => 
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Em processo :)</Text>
               </View>  
          }
      </Stack.Screen>
    </Stack.Navigator>
  );
}

//função que retorna stack referente a sobre
function DuvidasScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="duvi"
        options={
          {headerTitle: props => <LogoTitle/>}}>
          {props => 
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Em Processo :)</Text>
               </View>  
          }
      </Stack.Screen>
    </Stack.Navigator>
  );
}


//tela inicial
function TelaInicial() {
  //objeto de controle de navegação
  const navigation = useNavigation();

  return(
    <View style={styles.container}>

  <Image 
        style={{ width: 250, height: 350 }}
        source={require('./images/chat.png')}
      />
     
    </View>
  );
}

function TelaDepoimen() {

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>Minha tela de depoimentos</Text>
      <Button
        title='Voltar'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
//tela de detalhes
function TelaJunteSe() {

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>Minha tela de Junte-se a causa</Text>
      <Button
        title='Voltar'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

//tela do usuario
function TelaDuvidas() {
  
  const navigation = useNavigation();
  const route = useRoute();
  
  return(
    <View style={styles.container}>
    <Text style={styles.paragraph}>Minha tela de Duvidas</Text>
      <Button
        title='Voltar'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}


//stacks do App da aula anterior
function PrincipalStack(){
  return(
    <Stack.Navigator>
          
   

          <Stack.Screen
            name='Home'
            options={{ headerTitle: props => <LogoTitle/> }}>
            {props => <TelaInicial />}
          </Stack.Screen>

          <Stack.Screen
            name='config'
            options={{title: 'Tela de configuração'}}>
            {props => <TelaConfig/>}
          </Stack.Screen>

          <Stack.Screen
            name='Depoi'
            options={{title: 'Depoimentos'}}>
            {props => <TelaDepoimen />}
          </Stack.Screen>

          <Stack.Screen
            name='JunteSe'
            options={{title: 'Junte-se a causa'}}>
            {props => <TelaJunteSe />}
          </Stack.Screen>

          <Stack.Screen
            name='Duvidas'
            options={{title: 'Chat Duvidas'}}>
            {props => <TelaDuvidas />}
          </Stack.Screen>


        </Stack.Navigator>

  );
}

//renderiza os botões inferiores
function AppBottonTab({routeName}){
  return(
        <Tab.Navigator
      initialRouteName={routeName}
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Depoimentos') {
          iconName = 'ios-videocam';
        } 
        else if (route.name === 'Junte-se a causa') {
          iconName = focused ? 'ios-list-box' : 'ios-people';
        }
        else if (route.name === 'Dúvidas') {
          iconName = focused ? 'ios-information-circle' : 'ios-help-circle-outline';
        }
         else if (route.name === 'inicial') {
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

      <Tab.Screen name="Inicial" component={PrincipalStack}/>
      <Tab.Screen name="Depoimentos" component={DepoimentosScreen}/>
      <Tab.Screen name="Junte-se a causa" component={JunteSeScreen}/>
      <Tab.Screen name="Dúvidas" component={DuvidasScreen}/>

    </Tab.Navigator>

  );
}



class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator>

          <Drawer.Screen name='inicial'>
            {props => <AppBottonTab routeName='inicial' />}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginLeft: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titulo: {
    margin: 1,
    marginTop: 6,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 button:{
    backgroundColor:'black',
	    color:'white',
      fontSize: 15,
	    width: 150,
	    marginTop: 13,
	    marginHorizontal:70,
	    paddingHorizontal:10,
      textAlign: 'center',
	    alignSelf: 'center'
  },
});