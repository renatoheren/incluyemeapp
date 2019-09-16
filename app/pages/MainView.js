import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

class MainView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
        <Text style={styles.text}>BIENVENIDO ALUMNO PARA OBTENER INFORMACIÓN DESLIZA TU DEDO SOBRE LA PANTALLA Y TOCA DOS VECES LA PANTALLA PARA ESCOGER LA OPCIÓN.</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} label={'CONTINUAR'} />
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

export default MainView;