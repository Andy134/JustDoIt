import { styles } from './../../Custom'
import { useHistory, useParams } from "react-router-dom"
import Button from '@material-ui/core/Button';

function ToDoCreate() {

    const history = useHistory()

    const { id } = useParams();

    return (
        <>
            {id && <p>Update: {id}</p>}
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
                    <Button variant="outlined" style={{ color: 'gray' }} onClick={() => history.goBack()}>Cancel</Button>
                    &nbsp;
                    <Button variant="contained" color="secondary">Save</Button>
                </div>
            </div>
        </>
    )
}

export default ToDoCreate