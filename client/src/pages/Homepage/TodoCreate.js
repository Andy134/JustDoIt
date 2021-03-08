import { styles } from './../../Custom'
import { useHistory, useParams } from "react-router-dom"

function ToDoCreate() {

    const history = useHistory()

    const { id } = useParams();

    return (
        <>
            <p>Update: {id}</p>
            <div id="todoitem" style={styles.todoitem}>
                <div>
                    Title <input type="title" name="email" />
                </div>
                <br />
                <div>
                    Description <textarea type="description" name="password" />
                </div>
                <br />
                <div>
                    <button style={{ color: 'gray' }} onClick={() => history.goBack()}>Cancel</button>
                    <button style={{ color: 'red' }}>Save</button>
                </div>
            </div>
        </>
    )
}

export default ToDoCreate