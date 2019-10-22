import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import {api} from '../services/api';
import Internet from '../components/Internet';

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
      <Internet>
        <Text style={styles.text}>Para escoger uno de los cursos en los que estás matriculado, desliza tu dedo por la pantalla. Para retroceder, dirígete al final de la pantalla.</Text>
        { this.state.cursos && this.state.cursos.length > 0 ? this.state.cursos.map( curso => {
          return <Button key={curso.id} onPress={() => this.verNotas(curso.id)} label={curso.nombre_curso} />
        } ) : <Text>Sin cursos</Text> }
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
});

export default CursosView;