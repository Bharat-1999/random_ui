import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Home({ navigation }) {
    return (
        <ImageBackground
            source={require('../images/back.png')}
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
            <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
                <Text
                    style={{
                        fontSize: 40,
                        color: "#522289",
                        fontFamily: 'Roboto',
                    }}
                >
                    TravelZap
                        </Text>
                <Text style={{
                    fontSize: 15,
                    paddingVertical: 10,
                    paddingRight: 80,
                    lineHeight: 22,
                    fontFamily: 'Roboto',
                    color: '#a2a2db'
                }}>
                    Travelling here go everyWhere
                        </Text>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFF',
                    borderRadius: 10,
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginTop: 30
                }}>
                    <Image source={require('../images/search.png')} style={{ height: 15, width: 14 }} />
                    <TextInput
                        placeholder="Search Here"
                        style={{
                            paddingHorizontal: 20,
                            fontSize: 15,
                            color: '#ccccef',
                        }}
                    />
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginRight: -40, marginTop: 30 }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Details")}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: '#5facdb'
                        }}
                    >
                        <Image source={require('../images/p.png')} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#ff5c83",
                            marginHorizontal: 22,
                        }}
                    >
                        <Icon name="office-building" color="white" size={32} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#ffa06c",
                        }}
                    >
                        <Icon name="bus" color="white" size={32} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#bb32fe",
                            marginLeft: 22,
                        }}
                    >
                        <Icon name="dots-horizontal" color="white" size={32} />
                    </TouchableOpacity>
                </ScrollView>

                <Text style={{
                    color: '#FFF',
                    fontFamily: 'Roboto',
                    marginTop: 80,
                    fontSize: 17
                }}>
                    Recommended
                    </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: -40, marginTop: 30 }}
                >
                    <View style={{
                        backgroundColor: "#FEFEFE",
                        height: 200,
                        width: 190,
                        borderRadius: 15,
                        padding: 5,
                        marginHorizontal: 20
                    }}>
                        <Image source={require('../images/1.jpg')}
                            style={{
                                width: 180,
                                height: 130,
                                borderRadius: 10
                            }}
                        />

                        <View style={{
                            flexDirection: 'row',
                            width: 150,
                            alignItems: 'center'
                        }}>
                            <View style={{
                                paddingHorizontal: 5,
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 11,
                                    color: "#a2a2db"
                                }}>
                                    Jaipur,Rajasthan,India
                                </Text>
                            </View>
                            <Icon name="map-marker" size={25} color="#ff5c83" s />
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: "#FEFEFE",
                        height: 200,
                        width: 190,
                        borderRadius: 15,
                        padding: 5,
                        marginHorizontal: 20
                    }}>
                        <Image source={require('../images/2.jpg')}
                            style={{
                                width: 180,
                                height: 130,
                                borderRadius: 10
                            }}
                        />

                        <View style={{
                            flexDirection: 'row',
                            width: 150,
                            alignItems: 'center'
                        }}>
                            <View style={{
                                paddingHorizontal: 5,
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 11,
                                    color: "#a2a2db"
                                }}>
                                    Jaipur,Rajasthan,India
                                </Text>
                            </View>
                            <Icon name="map-marker" size={25} color="#5afcbd" s />
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: "#FEFEFE",
                        height: 200,
                        width: 190,
                        borderRadius: 15,
                        padding: 5,
                        marginHorizontal: 20
                    }}>
                        <Image source={require('../images/3.jpg')}
                            style={{
                                width: 180,
                                height: 130,
                                borderRadius: 10
                            }}
                        />

                        <View style={{
                            flexDirection: 'row',
                            width: 150,
                            alignItems: 'center'
                        }}>
                            <View style={{
                                paddingHorizontal: 5,
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 11,
                                    color: "#a2a2db"
                                }}>
                                    Jaipur,Rajasthan,India
                                </Text>
                            </View>
                            <Icon name="map-marker" size={25} color="yellow" s />
                        </View>
                    </View>
                </ScrollView>

            </View>
        </ImageBackground>
    )
}

export default Home;
