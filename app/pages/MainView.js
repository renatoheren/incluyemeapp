import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Internet from '../components/Internet';

class MainView extends PureComponent {
  componentDidMount() {
  }
  
  render() {
    return (
      <Internet>
        <Text style={styles.text}>BIENVENIDO ALUMNO PARA OBTENER INFORMACIÓN DESLIZA TU DEDO SOBRE LA PANTALLA Y TOCA DOS VECES LA PANTALLA PARA ESCOGER LA OPCIÓN.</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} label={'CONTINUAR'} />
      </Internet>
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