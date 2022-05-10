import React from 'react';
import Hornedbeast from './Hornedbeast';
import data from './data.json';
import './main.css';

class Main extends React.Component {

    render() {

        let beasts =[];
        data.forEach((bet, idx) => {
            // console.log(bet.image_url);
            beasts.push((<Hornedbeast 
                title={bet.title} 
                imageurl={bet.image_url} 
                description={bet.description}
                key={idx}
                idx={idx}
                />))
        });

        return (
            <main>
                {beasts}
            </main>
        );
    }
}

export default Main;