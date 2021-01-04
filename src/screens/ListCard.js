import React, { Component } from 'react'
import { View, Text, ProgressBarAndroidBase } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class ListCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}
                style={{
                    paddingHorizontal: 36,
                    alignSelf: 'center',
                    marginTop: 20,
                    backgroundColor: '#FFF',
                    height: 188,
                    elevation: 1,
                    width: 300,
                    borderRadius: 15
                }}>

                <View style={{
                    flexDirection: 'row',
                    paddingTop: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        color: "#4b3ca7",
                        fontSize: 20
                    }}>
                        NYC
                        </Text>

                    <Text style={{
                        fontSize: 20,
                        color: '#a2a2cd',
                        paddingHorizontal: 12
                    }}>
                        - - - - - - - - -
                        </Text>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 20,
                        color: '#4b3ca7'
                    }}>IDN</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 11,
                        color: '#4b3ca7'
                    }}>
                        New York
                        </Text>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 11,
                        color: '#4b3ca7',
                        paddingLeft: 100
                    }}>
                        Indonasia
                        </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 16,
                        color: '#522289',
                    }}>
                        09:00 AM
                        </Text>

                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 16,
                        color: '#522289',
                        paddingLeft: 70
                    }}>
                        21:00 PM
                        </Text>
                </View>

                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    color: '#a2a2db',
                }}>
                    6 Jan, 2021</Text>

                <Text style={{
                    fontSize: 17,
                    color: '#a2a2db',
                    marginRight: -5,
                    marginVertical: 8
                }}>
                    - - - - - - - - - - - - - - - - - - - - - - -
                    </Text>

                <View style={{
                    flexDirection: 'row',
                    marginTop: -8,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        color: '#522289',
                        fontSize: 16
                    }}>
                        Amount
                    </Text>
                    <Text style={{
                        fontFamily: 'Roboto',
                        color: "#4b3ca7",
                        paddingLeft: 75,
                        fontSize: 16
                    }}>
                        ₹ 50,000
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ListCard;