import ToDoItem from "./ToDoItem";
import { useHistory } from "react-router-dom"
import { PostService } from "./../../services/post.service"
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import TodoCreate from './../Homepage/TodoCreate'

function Homepage() {

    const history = useHistory()

    const [posts, setPosts] = useState([])
    const [openModal, setOpenModal] = useState(false)

    function handleOpenModal() {
        setOpenModal(true)
    }

    useEffect(() => {
        PostService.fetchPost().then((response) => {
            setPosts(response.data.posts)
        }).catch((err) => alert(err))
    }, [])

    return (
        <>

            <div>
                <h1>TO-DO LIST</h1>
            </div>
            <div style={{ marginBottom: '1rem', textAlign: 'right', width: '50%' }}>
                <Button variant="contained" color="secondary" onClick={handleOpenModal}>Add new</Button>
            </div>
            {   posts.length > 0 && posts.map((post) => <ToDoItem post={post} key={post._id} />)}

            < TodoCreate openModal={openModal} />
        </>
    )
}

export default Homepage