import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LLogo } from '../../assets'
import { Button, Gap, Header, Input } from '../../components'

const SignUp = ({ navigation }) => {
    return (
        <ScrollView >
            <Header route="GetStarted"  onPress={() => navigation.navigate('GetStarted')}/>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <LLogo />
                </View>
                <View style={styles.form}>
                    <View style={styles.formDescription}>
                        <Text style={styles.formTitle} >Sign Up</Text>
                        <Text >Mulai Tingkatkan Keahlianmu</Text>
                    </View>
                    <View style={styles.formInput}>
                        <Input label="Nama Lengkap" placeholder="Masukkan Nama Lengkap" />
                        <Input label="Email" placeholder="Masukkan Email" />
                        <Input label="Password" placeholder="Masukkan Password" />
                        <Input label="Konfirmasi Password" placeholder="Masukkan Konfirmasi Password" />
                        <View style={styles.containerButton}>
                            <Button title="Sign Up" />
                            <Gap height={5} />
                            <Button title="Sign In" type="secondary" onPress={() => navigation.navigate('SignIn')} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'white'
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    form: {
        flex: 5,
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    formDescription: {
        flex: 1
    },
    formInput: {
        flex: 5
    },
    containerButton: {
        marginTop: 40
    }
})