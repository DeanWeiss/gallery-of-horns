import React from 'react';
import './Hornedbeast.css';

class Hornedbeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hearts: 0,
            fun: true,
            role: 'Student'
        }
    }

    favoriteHeart = () => {
        this.setState({
            hearts: this.state.hearts + 1
        })
    }

    render() {
        // console.log(this.props.name);
        return (
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <br></br>
                <p>🖤{this.state.hearts} favorites</p>
                <br>
                </br>
                <p>Click picture to favorite.</p>
                <img
                    onClick={this.favoriteHeart}
                    src={this.props.imageurl}
                    alt={this.props.title}
                    title={this.props.title} />

            </article>
        )
    }
}
export default Hornedbeast;