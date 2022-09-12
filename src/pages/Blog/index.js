import { ScrollView, StyleSheet, View,Text } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Header } from '../../components'
import { connect } from 'react-redux'
import {GetBlog} from '../../actions'
const Blog = (props) => {
    useEffect(() => {
        props.GetBlog()
    }, [])
    return (
        <ScrollView>
            {/* <Header title="Blog" /> */}
            <View style={styles.container}>
                {
                    props.blog && props.blog.length >= 1 ? (
                        props.blog.map(blog => {
                            return (
                                <Card id={blog.id} title={blog.title} body={blog.body} />
                            )
                        })
                    ) : (<View><Text>Loading</Text></View>)
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
        margin: 10,
        flex: 1,
    },

})