class TopLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', signedin: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    if (this.state.signedin) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "label",
          null,
          "Signed In"
        ),
        React.createElement(
          "button",
          null,
          "?"
        ),
        React.createElement(
          "button",
          null,
          "+"
        ),
        React.createElement(
          "button",
          null,
          "🏠"
        ),
        React.createElement(
          "p",
          null,
          ""
        ),
        React.createElement("input", {
          id: "searchBar",
          onChange: this.handleChange,
          value: this.state.text
        }),
      )
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        'button',
        { onClick: () => this.setState({ signedin: true }) },
        'Sign In'
      ),
      React.createElement(
        "button",
        null,
        "?"
      ),
      React.createElement(
        "button",
        null,
        "+"
      ),
      React.createElement(
        "button",
        null,
        "🏠"
      ),
      React.createElement(
        "p",
        null,
        ""
      ),
      React.createElement("input", {
        id: "searchBar",
        onChange: this.handleChange,
        value: this.state.text
      }),
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class list1 extends React.Component {
  render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(item => React.createElement(
        "li",
        { key: item.id },
        item.text
      ))
    );
  }
}

ReactDOM.render(React.createElement(TopLeft, null), document.getElementById('topLeftControls'));