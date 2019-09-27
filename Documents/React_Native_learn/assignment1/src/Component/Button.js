import React, { Component } from "react";
import { Text,StyleSheet,TouchableOpacity} from "react-native";

export class Button extends Component {

    render(){
        return(
            <TouchableOpacity
            style={styles.loginButton}
            onPress={this.props.onClick}
            >
            <Text>{this.props.text}</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 100,
        borderRadius: 10
      },
})