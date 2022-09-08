import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LLogo } from '../../assets'
import { Button, Gap, Header, Input } from '../../components'

const SignIn = ({ navigation }) => {
    return (
        <ScrollView style={styles.body}>
            <Header route="GetStarted" onPress={() => navigation.navigate('GetStarted')} />
            <View style={styles.container}>
                <View style={styles.logo}>
                    <LLogo />
                </View>
                <View style={styles.form}>
                    <View style={styles.formDescription}>
                        <Text style={styles.formTitle} >Sign In</Text>
                        <Text >Masuk Untuk Melanjutkan Belajar</Text>
                    </View>
                    <View style={styles.formInput}>
                        <Input label="Email" placeholder="Masukkan Email" />
                        <Input label="Password" placeholder="Masukkan Password" />
                        <View style={styles.containerButton}>
                            <Button title="Sign In" />
                            <Gap height={5} />
                            <Button title="Sign Up" type="secondary" onPress={() => navigation.navigate('SignUp')} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor: 'white'
    },
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