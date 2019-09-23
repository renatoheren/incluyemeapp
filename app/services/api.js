import AsyncStorage from '@react-native-community/async-storage';

const URL = "http://40.117.98.54";

getAlumno = async () => {
  try {
    const value = await AsyncStorage.getItem('@alumno')
    console.log(value)
    return value;
  } catch(e) {
    console.log(e);
  }
}

export async function api(endpoint, params = "") {
  const ALUMNO = await getAlumno()
  params += `&alumno=${ALUMNO}`
  console.log(params)
  try {
    let response = await fetch(
      `${URL}/api/v1/${endpoint}/?format=json&${params}`,
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function login(codigo, psswd) {
  try {
    let response = await fetch(
      `${URL}/rest-auth/login/`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: codigo,
          password: psswd,
        }),
      }
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}