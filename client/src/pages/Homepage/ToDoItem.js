import { styles } from './../../Custom'
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"
import { useEffect } from 'react'

function ToDoItem({ post }) {

    const history = useHistory()

    useEffect(() => {
        console.log(JSON.stringify(post))
    }, [post])

    return (
        <div id="todoitem" style={styles.todoitem}>
            <div><strong>{post.title}</strong></div>
            <div>{post.description}</div>
            <br />
            <div>
                <Button variant="outlined" onClick={() => history.push(`/todo/${post._id}`)}>Edit</Button>
                &nbsp;&nbsp;
                <Button variant="outlined" style={{ color: 'red' }}>Delete</Button>
            </div>
        </div>
    )
}

export default ToDoItem