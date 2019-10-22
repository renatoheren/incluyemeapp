import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import moment from "moment";
import Button from '../components/Button';
import {api} from '../services/api';
import Internet from '../components/Internet';

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
      <Internet>
        <Text style={styles.text}>Para escoger un día de clase, desliza tu dedo por la pantalla. Para retroceder, dirígete al final de la pantalla.</Text>
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: this.state.startOfWeek
        })} label={'Lunes'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(1, 'days').format('YYYY-MM-DD')
        })} label={'Martes'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(2, 'days').format('YYYY-MM-DD')
        })} label={'Miércoles'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(3, 'days').format('YYYY-MM-DD')
        })} label={'Jueves'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(4, 'days').format('YYYY-MM-DD')
        })} label={'Viernes'} />
        <Button disabled={this.state.clases && this.state.clases.length > 0 ? false : true} onPress={() => this.props.navigation.navigate('HorarioDia', {
          clases: this.state.clases,
          day: moment(this.state.startOfWeek).add(5, 'days').format('YYYY-MM-DD')
        })} label={'Sábado'} />
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
  }
});

export default HorarioView;