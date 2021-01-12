import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Todo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id);
    };

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('Presseds', todo.title)}
            onLongPress={longPressHandler}>
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    }
});

export default Todo;
