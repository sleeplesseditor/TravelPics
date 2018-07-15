import React from 'react';
import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image 
                    source={props.selectedPlace.image}
                    style={styles.placeImage}
                />
                <Text
                    style={styles.placeName}
                >
                    {props.selectedPlace.name}
                </Text>
            </View>
        );
    }
    
    return (
        <Modal 
            onRequestClose={props.onModalClosed}
            visible={props.selectedPlace !== null}
            animationType="slide"
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <View style={styles.deleteButton}>
                        <TouchableOpacity onPress={props.onItemDeleted}>
                            <Icon size={30} name="ios-trash" color="red"/>
                        </TouchableOpacity>
                    </View>
                    <Button 
                        title="Close" 
                        onPress={props.onModalClosed}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
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
        alignItems: 'center'
    }
})

export default PlaceDetail;