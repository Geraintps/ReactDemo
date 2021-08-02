/** @jsx React.DOM */
'use strict';

const e = React.createElement;

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Signed In';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Sign In'
    );
  }

  

}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(Elements), domContainer);