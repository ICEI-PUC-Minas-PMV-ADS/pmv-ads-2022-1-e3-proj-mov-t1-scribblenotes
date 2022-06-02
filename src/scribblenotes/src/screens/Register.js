import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React from 'react'
import firebase from '../config/firebaseConfig'
import react, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const database = firebase.firestore();

export default function Register({ Navigation }) {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  
  
const registerFirebase = () =>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

  }
  useEffect(() => {

  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Scribble Notes</Text>
      <TextInput
        style={styles.input}
        placeholder={"Entre com seu email"}
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={"Coloque sua senha"}
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Email ou senha invalidos</Text>
        </View>
        :
        <View></View>
      }

      {email === "" || password === ""
        ?
        <TouchableOpacity
          disabled={true}
          style={styles.buttonLogin}
          onPress={registerFirebase}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={registerFirebase}

        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>
      }
      <Text style={styles.registration}>Não tem uma conta?
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate('Register')}>
          Registre-se Agora
        </Text>
      </Text>
      <View style={{ height: 100, }} />
    </KeyboardAvoidingView >
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "ios" ? 0 : 50,
    backgroundColor: "#032859"

  },
  title: {
    fontSize: 48,
    color: 'white',
    marginBottom: 80,
    fontWeight: "bold"
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#4d5156",
    borderRadius: 40
  },
  buttonLogin: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 50,
  },

  textButtonLogin: {
    color: 'black',
  },

  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 10,

  },
  registration: {
    marginTop: 20,
    color: "white",
  },
  linkSubscribe: {
    color: "yellow",
    fontSize: 16

  }
});
