import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { checkInternet } from '../services/internet';
import Internet from '../components/Internet';

class HorarioDiaView extends PureComponent {
  state = {
    clases: [],
    day: ""
  }

  componentDidMount() {
    const { navigation } = this.props;
    const clases = navigation.getParam('clases', []);
    const day = navigation.getParam('day', '');
    this.setState({
      day: day,
      clases: clases.filter( clase => clase.clase.fecha == day )
    })
  }

  render() {
    return (
      <Internet>
        <Text style={styles.text}>A continuación tendrá información sobre sus clases del día {this.state.day}. Para retroceder, dirígete a la parte final de la pantalla.</Text>
        <View style={styles.cursos}>
          { this.state.clases && this.state.clases.length ? this.state.clases.map( clase => {
            return <View key={clase.id} style={styles.clase}>
              <Text>{clase.clase.curso.nombre_curso}</Text>
              <Text>{clase.clase.presencial_u_online}</Text>
              <Text>AULA {clase.clase.aula}</Text>
              <Text>DE {clase.clase.hora_inicio} A {clase.clase.hora_fin}</Text>
            </View>
          } ) : <Text>Sin Informacion</Text> }
        </View>
        <Button onPress={() => this.props.navigation.goBack()} label={'Atrás'} />
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
  },
  cursos: {
    marginBottom: 20,
  },
  clase: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HorarioDiaView;