/**
 * @jsx React.DOM
 */
"use strict";

var Element = require('./Element');

var ASTOutput = React.createClass({
  propTypes: {
    ast: React.PropTypes.object,
  },
  render: function() {
    /* jshint ignore:start */
    var tree = null;
    if (this.props.ast) {
      tree = <Element value={this.props.ast} open={true}/>;
    }
    return (
      <div
        id="AST"
        className="highlight"
        onMouseLeave={function() {global.cmClearHighlight()}}>
        {tree}
      </div>
    );
    /* jshint ignore:end */
  }
});

module.exports = ASTOutput;
