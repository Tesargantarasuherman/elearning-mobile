import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Header } from '../../components'
import { GetBlog } from '../../actions'
import { connect } from 'react-redux'

const Blog = (props) => {
    useEffect(() => {
        props.GetBlog()
    }, [])
    return (
        <ScrollView>
            <Header title="Blog" />
            <View style={styles.container}>
                {
                    props.blog.map(blog => {
                        return (
                            <Card title={blog.title} body={blog.body}/>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    blog: state.blog.blog
})

const mapDispatchToProps = {
    GetBlog
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
const styles = StyleSheet.create({
    container: {
        margin: 10
    },

})