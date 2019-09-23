import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { checkInternet } from '../services/internet';
import Internet from '../components/Internet';

class NotasView extends PureComponent {
  componentDidMount() {
  }
  render() {
    const { navigation } = this.props;
    const notas = navigation.getParam('notas', []);
    return (
      <Internet>
        <Text style={styles.text}>ELIGE UNO DE TUS CURSOS DESLIZANDO EL DEDO POR LA PANTALLA.</Text>
        <View style={{marginBottom: 20}}>
          { notas && notas.length > 0 ? notas.map( nota => {
          return <Text style={{textAlign: "center"}}>{nota.evaluacion.tipo_evaluacion.nombre_tipo_evaluacion} - NOTA {nota.nota}</Text>
          } ) : <Text>SIN INFORMACIÓN</Text> }
        </View>
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
});

export default NotasView;