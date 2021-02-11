import React, { Component } from 'react'

class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    } 
  }

  handleBitrateClick = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        settings: {
          ...prevState.settings,
          bitrate: 12
        }
      }
    })
  }

  handleResolutionClick = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        settings: {
          ...prevState.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    })
  }

  render = () => {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick}>Bitrate</button>
        <button className='resolution' onClick={this.handleResolutionClick}>Resolution</button>
      </div>
    )
  }

}

export default YouTubeDebugger