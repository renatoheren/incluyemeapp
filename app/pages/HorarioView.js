import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import moment from "moment";
import Button from '../components/Button';
import {api} from '../services/api';

class HorarioView extends PureComponent {
  state = {
    clases: [],
    startOfWeek: moment(new Date()).startOf('isoWeek').format('YYYY-MM-DD'),
    endOfWeek: moment(new Date()).endOf('isoWeek').format('YYYY-MM-DD')
  }

  componentDidMount() {
    this.getDiasSemana();
  }

  getDiasSemana = () => {
    api('clases', `&start=${this.state.startOfWeek}&end=${this.state.endOfWeek}`).then( response => {
      this.setState({
        clases: response
      })
    } )
  }

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
        <Text style={styles.text}>PARA ESCOGER UN DIA DE CLASE DESLIZA TU DEDO POR LA PANTALLA. PARA RETROCEDER DIRIGETE AL FINAL DE LA PANTALLA</Text>
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: this.state.startOfWeek
        })} label={'LUNES'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(1, 'days').format('YYYY-MM-DD')
        })} label={'MARTES'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(2, 'days').format('YYYY-MM-DD')
        })} label={'MIERCOLES'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(3, 'days').format('YYYY-MM-DD')
        })} label={'JUEVES'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(4, 'days').format('YYYY-MM-DD')
        })} label={'VIERNES'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(5, 'days').format('YYYY-MM-DD')
        })} label={'SABADO'} />
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
  }
});

export default HorarioView;