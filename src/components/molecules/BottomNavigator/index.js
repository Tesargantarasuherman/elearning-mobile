import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BottomNavigator = ({ state, descriptors, navigation }) => {
    // const focusedOptions = descriptors[state.routes[state.index].key].options;

    // if (focusedOptions.tabBarVisible === false) {
    //     return null;
    // }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Text style={{color:isFocused ? '#673ab7' : '#222222'}}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFFFF',
        justifyContent: 'space-between',
        paddingHorizontal: 55,
        paddingVertical: 14
    }
})