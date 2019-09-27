import React, {Component} from "react";
import {View,TextInput,StyleSheet} from "react-native";

export class TextField extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputValue:''
        }
    }

    gettextFieldValue = () => {
        return this.state.inputValue
    }

    render () {
        return(
            <View>
                <TextInput style={styles.input}    
                    placeholderTextColor="#C0C0C0"
                   {...this.props}
                    onChangeText={(value) => this.setState({inputValue:value})}
                    value={this.state.inputValue}>
                </TextInput>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        color: "#ffffff",
        height: 30,
        fontSize: 16
      },
})