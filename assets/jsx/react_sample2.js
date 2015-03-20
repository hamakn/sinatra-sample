App = React.createClass({
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
    return <div>
      Switch1:
      <button onClick={this.handleSwitch1}>
        {this.state.switch1 ? "On" : "Off"}
      </button>
    </div>;
  }
});

React.render(<App/>, document.getElementById('body'));
