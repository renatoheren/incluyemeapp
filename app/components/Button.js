import React, { PureComponent } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends PureComponent {
  render() {
    const { label, onPress, disabled } = this.props;
    return (
      <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>{ label }</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff1800",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    color: "#ffffff",
    fontSize: 30
  }
});

export default Button;