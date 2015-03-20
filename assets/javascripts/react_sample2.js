App = React.createClass({displayName: "App",
  getInitialState: function() {
    return {
      switch1: true
    };
  },

  handleSwitch1: function() {
    this.setState({
      switch1: !this.state.switch1 // toggle
    });
  },

  render: function() {
    return React.createElement("div", null, 
      "Switch1:", 
      React.createElement("button", {onClick: this.handleSwitch1}, 
        this.state.switch1 ? "On" : "Off"
      )
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('body'));
