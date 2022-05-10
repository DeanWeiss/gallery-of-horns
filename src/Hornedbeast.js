import React from 'react';

class Hornedbeast extends React.Component {
render() {
    console.log(this.props.name);
    return (
        <article>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <img src={this.props.url} alt={this.props.url} title={this.props.url} />
        </article>
    )
}
}
export default Hornedbeast;