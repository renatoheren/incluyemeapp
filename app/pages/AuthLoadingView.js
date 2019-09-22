import React, { PureComponent } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingView extends PureComponent {
  componentDidMount() {
    this.isLogin();
  }

  isLogin = async () => {
    try {
			const value = await AsyncStorage.getItem('@alumno');
			this.props.navigation.navigate( value ? 'App' : 'Auth');
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
    	<View>
        <ActivityIndicator />
      </View>
    )
  }
}

export default AuthLoadingView;