import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import {api} from '../services/api';
import { checkInternet } from '../services/internet';

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
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
        <Text style={styles.text}>PARA ESCOGER ENTRE PAGOS PENDIENTES Y REALIZADOS, DESLIZA YU DEDO POR LA PANTALLA</Text>
        <Button disabled={this.state.disabled} onPress={() => this.props.navigation.navigate('PagosPendientes', {
          pagos: this.state.pagosPendientes
        })} label={'PAGOS PENDIENTES'} />
        <Button disabled={this.state.disabled} onPress={() => this.props.navigation.navigate('PagosRealizados', {
          pagos: this.state.pagosRealizados
        })} label={'PAGOS REALIZADOS'} />
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

export default PagosView;