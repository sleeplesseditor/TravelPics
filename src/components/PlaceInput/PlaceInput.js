import React, { Component} from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ""
    };

    placeNameChange = val => {
        this.setState({
          placeName: val
        });
    };

    placeSubmit = () => {
        if (this.state.placeName.trim() === "") {
          return;
        }
    
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter a location"
                    onChangeText={this.placeNameChange} 
                    value={this.state.placeName}
                    style={styles.placeInput}
                />
                <Button
                    onPress={this.placeSubmit} 
                    style={styles.placeButton}
                    title="Add"
                />
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    inputContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center"
    },
    placeInput: {
      width: "70%"
    },
    placeButton: {
      width: "30%"
    }
  
});

export default PlaceInput;