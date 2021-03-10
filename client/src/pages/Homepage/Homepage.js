import ToDoItem from "./ToDoItem";
import {useHistory} from "react-router-dom"

function Homepage() {

    const history = useHistory()

    return (
        <>
            <div>
                <h3>TODO LIST</h3>
            </div>

            <div style={{marginBottom: '1rem', textAlign: 'right', width: '50%'}}>
                <button style={{color: 'blue'}} onClick={()=> history.push("/todo")}>Add new</button>
            </div>

            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>

        </>
    )
}

export default Homepage