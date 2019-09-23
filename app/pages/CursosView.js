import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import {api} from '../services/api';
import { checkInternet } from '../services/internet';

class CursosView extends PureComponent {
  state = {
    cursos: [],
    notas: []
  }

  componentDidMount() {
    this.getCursos();
    this.getNotas();
  }

  getCursos = () => {
    api('cursos').then( response => {
      matricula = response[0].cursos;
      console.log(matricula);
      this.setState({
        cursos: matricula
      })
    } )
  }

  getNotas = () => {
    api('notas').then( response => {
      console.log(response)
      this.setState({
        notas: response
      })
    } )
  }

  verNotas = (curso_id) => {
    notas = this.state.notas.filter( n => n.evaluacion.curso.id === curso_id )
    console.log(notas)
    this.props.navigation.navigate('Notas', {
      notas: notas
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
        <Text style={styles.text}>PARA ESCOGER UN DIA DE CLASE DESLIZA TU DEDO POR LA PANTALLA. PARA RETROCEDER DIRIGETE AL FINAL DE LA PANTALLA</Text>
        { this.state.cursos && this.state.cursos.length > 0 ? this.state.cursos.map( curso => {
          return <Button key={curso.id} onPress={() => this.verNotas(curso.id)} label={curso.nombre_curso} />
        } ) : <Text>SIN CURSOS</Text> }
        <Button onPress={() => this.props.navigation.goBack()} label={'ATRAS'} />
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
  },
});

export default CursosView;