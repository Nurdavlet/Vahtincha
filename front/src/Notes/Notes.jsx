import React from 'react';
import {Navbar} from "../global/navbar";

class Notes extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <header className="App-header">
                    <Navbar />
                </header>

                <footer>

                </footer>
            </div>
        );
    }
}

export default Notes;