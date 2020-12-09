import React from 'react';
import Note from '../Components/Note';

class NotesContainer extends React.Component {

    apiResponse() {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    
    render() {
        let messages = this.apiResponse().map(message => { return <Note note={message}/>})
        return (
            <ul>
                { messages }
            </ul>
        )
    }
    
    // apiResponse() {
    //     let messages = [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    //     return messages.map(message => { return <Note note={message}/>})
    // }

    // render() {
    //     return (
    //         <ul>
    //             { this.apiResponse() }
    //         </ul>
    //     )
    // }

}

export default NotesContainer;

