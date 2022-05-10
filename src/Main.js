import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Hornedbeast 
                name='Minotaur' 
                description='The Minotaur is a horned beast that is said to guard labyrinths.'
                url={'https://i.pinimg.com/originals/f5/49/68/f549680d5463cfc99bf25c58b83b3173.png'}
                />
                <Hornedbeast 
                name='Satyr' 
                description='These small horned creatures are described as lustful and drunks.'
                url={'https://www.gmbinder.com/images/gvKDaDd.jpg'}
                />
            </main>
        );
    }
}

export default Main;