import React, { PureComponent } from 'react'
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Alert } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import RNExitApp from 'react-native-exit-app';

export default class Internet extends PureComponent {
    componentDidMount = async() => {
        NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if( !state.isConnected ) {
                Alert.alert(
                    'Error',
                    'Sin conexión a internet.',
                    [
                      {text: 'Cerrar', onPress: () => RNExitApp.exitApp() },
                    ],
                    {cancelable: false},
                );
            }
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
                {this.props.children}
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
});