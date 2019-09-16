import React, { PureComponent } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet } from 'react-native';

class CursosView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>

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

export default CursosView;