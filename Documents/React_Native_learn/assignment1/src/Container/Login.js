import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import images from "../Themes/Images";
import CheckBox from "../Component/CheckBox";
import { checkEmail } from "../Utils/Validations";
import { TextField } from "../Component/TextField";
import { i18n } from "../Assets/Strings";
import { Button } from "../Component/Button";

export default class Login extends Component {
  clickOnLogin = () => {
    if (this.check.getValue() == false) {
      alert(i18n.t("enable_check"));
    } else if (this.emailValue.gettextFieldValue() == "") {
      alert(i18n.t("email_required"));
    } else if (this.passwordValue.gettextFieldValue() == "") {
      alert(i18n.t("password_required"));
    } else if (this.emailValue.gettextFieldValue()) {
      if (checkEmail(this.emailValue.gettextFieldValue())) {
        alert(i18n.t("email_valid"));
      } else {
        alert(i18n.t("email_invalid"));
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.logoContainer}>
          <Image style={styles.logo} source={images.login_user} />
          <View style={styles.formContainer}>
            <TextField
              placeholder={i18n.t("email")}
              ref={email => (this.emailValue = email)}
            ></TextField>
            <View style={styles.lineView}></View>
            <TextField
              placeholder={i18n.t("password")}
              ref={password => (this.passwordValue = password)}
            ></TextField>
            <View style={styles.lineView}></View>
            <CheckBox
              value={i18n.t("remember")}
              ref={ch => (this.check = ch)}
            ></CheckBox>
          </View>
          <View style={styles.loginButtonContainer}>
            <Button text={i18n.t("login")} onClick={this.clickOnLogin}></Button>
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
    flex: 1
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50
  },
  formContainer: {
    marginTop: 100,
    padding: 30
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
  bottomContainer: {
    flex: 1,
    color: "#ffffff",
    justifyContent: "flex-end"
  },
  bottomText: {
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20
  }
});
