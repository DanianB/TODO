function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);
    return(<>
    {todos.map((todo,) => <div key={i}>{todo.text}</div>)}
    </>);
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)