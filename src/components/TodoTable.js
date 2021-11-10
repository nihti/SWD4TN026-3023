export default function TodoTable(props) {
    return(
        <div>
            <table><tbody>
                { 
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}