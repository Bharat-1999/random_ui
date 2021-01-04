import React, { Component } from 'react';
import { Image, ImageBackground, Modal, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ListCard from './ListCard';
import ModalCard from './ModalCard';

class Details extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { modalVisible } = this.state;
        return (
            <ImageBackground
                source={require('../images/back2.png')}
                style={{ height: '100%', width: '100%' }}
            >
                <View style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    alignItems: 'center',
                    paddingHorizontal: 40
                }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="menu" size={30} color='#a2a2db' style={{ width: 20 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="account-circle" size={33} color='#a2a2db' style={{ marginLeft: 270 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: "100%",
                    marginTop: 50,
                    marginBottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        backgroundColor: '#5facdb',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../images/p.png')}
                            style={{ width: 26, height: 26 }} />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 40
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'Roboto',
                        color: '#FFF'
                    }}>NYC</Text>
                    <Text style={{
                        fontSize: 20, color: '#a2a2db', paddingHorizontal: 20,
                    }}>
                        - - - - - - - - - - - - - - - - - - - -
                </Text>
                    <Text style={{ fontSize: 24, fontFamily: 'Roboto', color: '#FFF' }}>
                        IDN
                </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 40
                }}>
                    <Text style={{
                        color: "#a2a2db",
                        fontFamily: 'Roboto'
                    }}>
                        New York
                </Text>
                    <Text style={{
                        color: "#a2a2db",
                        fontFamily: 'Roboto',
                        paddingLeft: 220
                    }}>
                        Indonasia
                </Text>
                </View>
                <Text style={{
                    paddingHorizontal: 40,
                    color: '#a2a2db',
                    fontFamily: 'Roboto'
                }}>
                    6 Jan, 2020
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 50,
                    marginTop: 90
                }}>
                    <Image source={require('../images/dots.png')}
                        style={{ width: 16, height: 16 }} />
                    <Image source={require('../images/filter.png')}
                        style={{ marginLeft: 270, width: 20, height: 20 }} />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginVertical: 5,
                    }}
                >
                    <ListCard
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    />
                    <ListCard
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    />
                    <ListCard
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    />

                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal is closed");
                            }}
                        >
                            <ModalCard
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            />
                        </Modal>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
export default Details;
