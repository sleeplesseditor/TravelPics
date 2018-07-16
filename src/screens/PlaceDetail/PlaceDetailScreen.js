import React, { Component } from 'react';
import {
    Button, 
    Image, 
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../../store/actions/index';

class PlaceDetailScreen extends Component {
    placeDeleted = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image 
                        source={this.props.selectedPlace.image}
                        style={styles.placeImage}
                    />
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeleted}>
                        <View style={styles.deleteButton}>
                            <Icon 
                                size={30} 
                                name="ios-trash" 
                                color="red" 
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: key => dispatch(deletePlace(key))
    };
}; 

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);