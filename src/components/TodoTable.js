import React, { Fragment } from 'react';

export default function TodoList(props) {
    /**
    The TodoTable component is stateless component that contains the todo table.
    Hint! You can also pass delete function to TodoTable by using props.
     */

    // TodoTable component has now two properties: todos and delete. 
    return(
        <Fragment>
            <table>
                <tbody> 
                {
                    props.todos.map((todo, i) =>
                    <tr key={i} >
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => props.delete(i)}>Delete</button></td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </Fragment>
    );
}