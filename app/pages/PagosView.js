import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import {api} from '../services/api';
import Internet from '../components/Internet';

class PagosView extends PureComponent {
  state = {
    pagos: [],
    pagosPendientes: [],
    pagosRealizados: [],
    disabled: true
  }

  componentDidMount() {
    this.getPagos();
  }

  getPagos = () => {
    api('pagos').then( response => {
      console.log(response);
      this.setState({
        pagos: response,
        pagosPendientes: response.filter( p => p.realizado == "No" ),
        pagosRealizados: response.filter( p => p.realizado == "Si" ),
        disabled: false
      })
    } )
  }

  render() {
    return (
      <Internet>
        <Text style={styles.text}>Para escoger entre pagos pendientes y realizados, desliza tu dedo por la pantalla y escoge la opción de tu preferencia.</Text>
        <Button disabled={this.state.disabled} onPress={() => this.props.navigation.navigate('PagosPendientes', {
          pagos: this.state.pagosPendientes
        })} label={'Pagos pendientes'} />
        <Button disabled={this.state.disabled} onPress={() => this.props.navigation.navigate('PagosRealizados', {
          pagos: this.state.pagosRealizados
        })} label={'Pagos realizados'} />
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

export default PagosView;