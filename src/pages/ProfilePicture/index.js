import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconPlus, IconProfile, ImgProfile } from '../../assets'
import { Button } from '../../components'

const ProfilePicture = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <View style={styles.avatarWrapper}>
                    <Image source={ImgProfile} style={styles.avatar} />
                    <IconPlus style={styles.addPhoto} />
                </View>
                <Text style={styles.name}>Tesar Gantara Suherman</Text>
                <Text style={styles.proffesion}>Programmer</Text>
            </View>
            <View>
                <Button title="Upload and Continue" />
            </View>
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent:'space-between',
        paddingVertical:20
    },
    content:{
        flex:1,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    addPhoto: {
        position: 'absolute',
        bottom: 0,
        right: 8,
    },
    name: {
        fontSize: 24,
        color: '#D43E2A',
        fontWeight: '400'
    },
    proffesion: {
        fontSize: 18,
        color: '#333333',
        fontWeight: '600'
    }

})