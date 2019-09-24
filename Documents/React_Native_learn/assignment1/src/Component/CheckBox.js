import React, { Component } from "react";
import {
View,
StyleSheet,
Text,
TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class CheckBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
          isSelected:false
        }
    }
    clickOnCheckBox = () => {
       if(this.state.isSelected){
        this.setState({
            isSelected: false
          })
       }else{
        this.setState({
            isSelected: true
          })
       }
    }
    getValue = () => {
        return this.state.isSelected
    }

    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={this.clickOnCheckBox}>
            <Icon style={styles.checkBox} name= {this.state.isSelected?"ios-checkmark-circle":"ios-checkmark-circle-outline"} />
            <Text style={styles.checkBoxText}>{this.props.value}</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    checkBoxText: {
        color: "#ffffff",
        marginLeft: 10,
        top: 5
    },
    checkBox: {
        fontSize: 25,
        color: "#ffffff"
    },
})
