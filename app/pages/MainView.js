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
        <Text style={styles.text}>Bienvenido alumno, para poder navegar dentro de la aplicación desliza tu dedo hacia el final de la pantalla y toca dos veces el botón continuar.</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} label={'Continuar'} />
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