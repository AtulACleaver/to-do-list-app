import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import "./List.css"
import ListItem from "./ListItem";

function List() {
    const [tasks, setTasks] = useState([
        "Complete the To-Do List App",
        "Complete learning the API's",
    ]);
    const [newTasks, setNewTasks] = useState("")



    const listItems = tasks.map((tasks) =>
        <ListItem key={tasks} item={tasks} />
    );

    function addToTasks(tasks) {
        const currentTasks = [...tasks]
        currentTasks.push(tasks)
        setTasks(currentTasks)
    }

    return (
        <div className="list-container">
            <h2 className="list-header">My Tasks</h2>
            <Row>
                <Col xs={12} md={9}>
                    <input
                        placeholder="Type a new task here..."
                        className="list-input"
                        value={newTasks}
                        onChange={e => setNewTasks(e.target.value)}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Button size="lg" block className="submit-button" onClick={() => {addToTasks(newTasks); setNewTasks("")}}>Add Tasks</Button>
                </Col>
            </Row>
            {listItems}
        </div>
    );
}

export default List;