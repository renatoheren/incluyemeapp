import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-community/async-storage';

class MenuView extends PureComponent {
  logOut = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
        <Text style={styles.text}>BIENVENIDO ALUMNO PARA OBTENER INFORMACIÓN DESLIZA TU DEDO SOBRE LA PANTALLA Y TOCA DOS VECES LA PANTALLA PARA ESCOGER LA OPCIÓN</Text>
        <Button onPress={() => this.props.navigation.navigate('Horario')} label={'HORARIO'} />
        <Button onPress={() => this.props.navigation.navigate('Cursos')} label={'NOTAS'} />
        <Button onPress={() => this.props.navigation.navigate('Pagos')} label={'PAGOS'} />
        <Button onPress={this.logOut} label={'ATRAS'} />
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
    padding: 20,
    textAlign: "center"
  }
});

export default MenuView;