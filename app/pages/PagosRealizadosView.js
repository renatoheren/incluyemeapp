import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Button from '../components/Button';
import { StyleSheet, Text, View } from 'react-native';
import { checkInternet } from '../services/internet';

class PagosRealizadosView extends PureComponent {
  componentDidMount() {
  }
  
  render() {
    const { navigation } = this.props;
    const pagos = navigation.getParam('pagos', []);
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
        <Text style={styles.text}>A LA FECHA TIENE {pagos.length} BOLETAS REALIZADAS:</Text>
        <View style={styles.pagos}>
          { pagos && pagos.length ? pagos.map( pago => {
            return <View style={styles.pago}>
              <Text>{pago.boleta.concepto} POR {pago.valor} SOLES QUE VENCE EL {pago.boleta.fecha_vencimiento}.</Text>
            </View>
          } ) : <Text>Sin Informacion</Text> }
        </View>
        <Text style={styles.pagos}>DESLIZA TU DEDO AL FINAL DE LA PANTALLA PARA REGRESAR A LA OPCION DE PAGOS.</Text>
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
  pagos: {
    marginBottom: 20,
  },
  pago: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PagosRealizadosView;