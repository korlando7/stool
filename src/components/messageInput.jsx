import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MessageInput extends Component {
  constructor (props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress (e) {
    const msg = e.target.value
    if (e.key === 'Enter') {
      // TODO this will be replaced with sending a message
      console.log(msg)
      this.messageInput.value = ''
    }
  }

  render () {
    const mode = this.props.private ? 'private' : 'public'
    return (
      <div className='messenger'>
        <input
          className='messenger-input'
          type='text'
          placeholder={`Send ${mode} message`}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          ref={el => { this.messageInput = el }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  private: state.private
})

MessageInput.propTypes = {
  private: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, null)(MessageInput)