import React from 'react';
import { TextInput, Button, View, StyleSheet, Alert } from 'react-native';

const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = React.useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Название дела не может быть пустым');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder="Введите название дела..."
                autoCorrect={false}
                autoCapitalize="none"
                // keyboardType="number-pad"
            />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        padding: 10,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});

export default AddTodo;
