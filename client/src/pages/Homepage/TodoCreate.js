import { styles } from './../../Custom'
import { useHistory, useParams } from "react-router-dom"
import { Button, Modal } from '@material-ui/core';
import { useState, useEffect } from 'react';

function ToDoCreate({ openModal }) {

    const history = useHistory()

    const { id } = useParams();

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (openModal) {
            setOpen(true)
        }
    }, [openModal])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
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
        </Modal>
    )
}

export default ToDoCreate