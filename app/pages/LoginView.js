import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import {login} from '../services/api';

class LoginView extends PureComponent {
  state = {
    codigo: "",
    password: ""
  }

  componentDidMount() {
    console.info("LoginView componentDidMount.");
  }
  
  isLogin = async () => {
    console.info("Validar si el usuario ya ha guardado su sesion.");
    try {
      const value = await AsyncStorage.getItem('@alumno')
      return value;
    } catch(e) {
      
    }
  }

  loginAction = async () => {
    var codigo = this.state.codigo;
    var password = this.state.password;
    if(codigo && password) {
      login(codigo, password).then( response => {
        if( response && response.key ) {
          this.setAlumno(codigo).then( () => {
            this.props.navigation.navigate('Menu');
          } )
        }
      } );
    }
  }

  setAlumno = async (codigo) => {
    try {
      await AsyncStorage.setItem('@alumno', codigo)
    } catch (e) {
      // saving error
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
        <Text style={styles.text}>INGRESA A TU CUENTA. DESLIZA TU DEDO SOBRE LA PANTALLA Y TOCA DOS VECES LA PANTALLA PARA ESCOGER LA OPCIÓN.</Text>
        <View>
          <TextInput autoCapitalize="none" onChangeText={(text) => this.setState({codigo: text})} style={styles.textinput} placeholder={"CODIGO"} />
          <TextInput autoCapitalize="none" onChangeText={(text) => this.setState({password: text})} style={styles.textinput} placeholder={"CONTRASEÑA"} />
        </View>
        <Button onPress={this.loginAction} label={'CONTINUAR'} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "stretch"
  },
  text: {
    fontSize: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    textAlign: "center"
  },
  textinput: {
    height: 100,
    borderColor: "#ededed",
    borderWidth: 3,
    margin: 20,
    paddingHorizontal: 20
  }
});

export default LoginView;