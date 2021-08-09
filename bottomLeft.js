class BottomLeft extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', translated: false };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      if (this.state.translated) {
        return React.createElement(
          "div",
          null,
          React.createElement("input", {
            id: "searchBar2",
            onChange: this.handleChange,
            value: this.state.text
          }),
          React.createElement(
            "button",
            null,
            "Tags"
          ),
          React.createElement(
            "button",
            null,
            "New!"
          ),
          React.createElement(
            'button',
            { onClick: () => this.setState({ translated: false }) },
            'English'
          ),
        );
      }

      return React.createElement(
        "div",
        null,
        React.createElement("input", {
          id: "searchBar2",
          onChange: this.handleChange,
          value: this.state.text
        }),
        React.createElement(
          "button",
          null,
          "Tags"
        ),
        React.createElement(
          "button",
          null,
          "New!"
        ),
        React.createElement(
          'button',
          { onClick: () => this.setState({ translated: true }) },
          'Cymraeg'
        ),
      );
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
  
  class list3 extends React.Component {
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
  
  ReactDOM.render(React.createElement(BottomLeft, null), document.getElementById('bottomLeftControls'));