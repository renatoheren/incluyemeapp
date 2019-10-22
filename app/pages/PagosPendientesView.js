import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Button from '../components/Button';
import { StyleSheet, Text, View } from 'react-native';
import { checkInternet } from '../services/internet';
import Internet from '../components/Internet';

class PagosPendientesView extends PureComponent {
  componentDidMount() {
  }
  
  render() {
    const { navigation } = this.props;
    const pagos = navigation.getParam('pagos', []);
    return (
      <Internet>
        <Text style={styles.text}>A la fecha tiene {pagos.length} boletas pendientes:</Text>
        <View style={styles.pagos}>
          { pagos && pagos.length ? pagos.map( pago => {
            return <View style={styles.pago}>
              <Text>{pago.boleta.concepto} por {pago.valor} soles, que vence el {pago.boleta.fecha_vencimiento}.</Text>
            </View>
          } ) : <Text>Sin Informacion</Text> }
        </View>
        <Text style={styles.pagos}>Desliza tu dedo al final de la pantalla para regresar a la opción de pagos.</Text>
        <Button onPress={() => this.props.navigation.goBack()} label={'ATRAS'} />
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
  pagos: {
    marginBottom: 20,
  },
  pago: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PagosPendientesView;