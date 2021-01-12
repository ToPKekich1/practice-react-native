import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import AddTodo from './src/AddTodo';
import Navbar from './src/Navbar';
import Todo from './src/Todo';

export default function App() {
    const [todos, setTodos] = React.useState([]);

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ]);
    };

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => id !== todo.id));
    };

    return (
        <View>
            <Navbar title="Todo App" />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({ item }) => (
                        <Todo todo={item} onRemove={removeTodo} />
                    )}
                />
            </View>
        </View>
    );
}

//StyleSheet - класс с помощью которого создаем стили, оптимизирует и валидирует классы.
//View по умолчанию имеет свойство display: flex
const styles = StyleSheet.create({
    //блоки
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
