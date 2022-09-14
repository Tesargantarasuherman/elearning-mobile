import { ScrollView, StyleSheet, View,Text } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Header } from '../../components'
import { connect } from 'react-redux'
import {GetBlog} from '../../actions'
const Blog = (props) => {
    useEffect(() => {
        props.GetBlog()
        console.log(props)
    }, [])

    const renderBlog=()=>{
        
        return props?.blog && props?.blog?.length >= 1 ? (
            props.blog.map(blog => {
                return (
                    <Card key={blog.id} title={blog.title} body={blog.body} />
                )
            })
        ) : (<View><Text>Loading</Text></View>)
        
    }
    return (
        <ScrollView>
            {/* <Header title="Blog" /> */}
            <View style={styles.container}>
                {renderBlog()}
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    blog: state?.blog?.blog
})

const mapDispatchToProps = {
    GetBlog
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
    },

})