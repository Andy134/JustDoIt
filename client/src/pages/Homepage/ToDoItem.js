import {styles} from './../../Custom'
import {useHistory} from "react-router-dom"
import {Button} from "@material-ui/core"

function ToDoItem() {

    const history = useHistory()

    return (
        <div id="todoitem" style={styles.todoitem}>
            <div><strong>Hello world!</strong></div>
            <div>This is what you do</div>
            <br />
            <div>
                <Button variant="outlined" onClick={()=> history.push("/todo/123")}>Edit</Button>
                &nbsp;&nbsp;
                <Button variant="outlined" style={{ color: 'red' }}>Delete</Button>
            </div>
        </div>
    )
}

export default ToDoItem