import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import images from "../Themes/Images";
import CheckBox from "../Component/CheckBox";
import { checkEmail } from "../Utils/Validations";

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }

  clickOnLogin = () => {
    if (this.check.getValue() == false){
      alert('Check on Remember password')
    }
    else if(this.state.email == '') {
      alert('Required Email')
    }
    else if(this.state.password == '') {
      alert('Required Password')
    }else if(this.state.email){
      if(checkEmail(this.state.email)){
        alert(' Email Valid')
      }else{
        alert(' Email InValid')
      }

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.logoContainer}>
          <Image style={styles.logo} source={images.login_user} />
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#C0C0C0"
              onChangeText={(value) => this.setState({email:value})}
              value={this.state.email}
            ></TextInput>
            <View style={styles.lineView}></View>
            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="#C0C0C0"
              secureTextEntry
              placeholderTextColor="#C0C0C0"
              onChangeText={(value) => this.setState({password:value})}
              value={this.state.password}
            ></TextInput>
            <View style={styles.lineView}></View>
            <CheckBox value="Remember me!" 
              ref = {ch=>this.check=ch}></CheckBox>
          </View>
          <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={this.clickOnLogin} >
              <Text>Signin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>www.opentrends.net</Text>
        </View>
        </KeyboardAwareScrollView>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#176ccd",
    flex: 1
  },
  logoContainer: {
    flex: 1,
 //   backgroundColor: "red"
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50
  },
  formContainer: {
    marginTop:100,
    padding: 30
  },
  input: {
    color: "#ffffff",
    height: 30,
    fontSize: 16
  },
  lineView: {
    backgroundColor: "#ffffff",
    height: 0.5,
    marginBottom: 20
  },
  loginButtonContainer: {
    alignItems: "flex-end",
    marginRight: 20
  },
  loginButton: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 100,
    borderRadius: 10
  },
  bottomContainer: {
    flex: 1,
    color: "#ffffff",
    //backgroundColor: "green",
    justifyContent: "flex-end",
  },
  bottomText: {
    color: "#ffffff",
    textAlign: "center",
    marginBottom:20
  }
});
