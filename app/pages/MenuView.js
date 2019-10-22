import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import { checkInternet } from '../services/internet';
import { NavigationEvents } from 'react-navigation';
import Internet from '../components/Internet';

class MenuView extends PureComponent {  
  componentDidMount() {
  }
  
  logOut = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <Internet>
        <Text style={styles.text}>Bienvenido alumno, para obtener información desliza tu dedo sobre la pantalla y toca dos veces para escoger la opción.</Text>
        <Button onPress={() => this.props.navigation.navigate('Horario')} label={'Horario'} />
        <Button onPress={() => this.props.navigation.navigate('Cursos')} label={'Notas'} />
        <Button onPress={() => this.props.navigation.navigate('Pagos')} label={'Pagos'} />
        <Button onPress={this.logOut} label={'Atrás'} />
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

export default MenuView;