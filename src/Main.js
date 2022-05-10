import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Hornedbeast 
                name='Minotaur' 
                description='The Minotaur is a horned beast that is said to guard labyrinths.'
                />
                <Hornedbeast 
                name='Satyr' 
                description='These small horned creatures are described as lustful and drunks.'
                />
            </main>
        );
    }
}

export default Main;