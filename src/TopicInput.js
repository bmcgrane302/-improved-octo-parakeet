import React, { Component } from 'react'

class TopicInput extends Component {
  state = {
    newTopic: ''
  }

  handleChange = (e) => {
    console.log('event', e);
    this.setState({ newTopic: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateTopicListFunc(this.state.newTopic)
  }

  render () {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label for="inputEmail" className="col-lg-2 control-label">Topic to study</label>
            <div className="col-lg-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                autocomplete="off"
                value={this.state.newTopic}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default TopicInput
