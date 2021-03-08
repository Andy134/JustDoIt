import {styles} from './../../Custom'
import {useHistory} from "react-router-dom"

function ToDoItem() {

    const history = useHistory()

    return (
        <div id="todoitem" style={styles.todoitem}>
            <div><strong>Hello world!</strong></div>
            <div>This is what you do</div>
            <br />
            <div>
                <button style={{ color: 'green' }} onClick={()=> history.push("/todo/123")}>Edit</button>
                <button style={{ color: 'red' }}>Delete</button>
            </div>
        </div>
    )
}

export default ToDoItem