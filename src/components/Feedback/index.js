// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackRecived: true}

  onReceiveFeedback = () => {
    this.setState(prevState => {
      if (prevState.feedbackRecived === false) {
        return {feedbackRecived: true}
      }
      return {feedbackRecived: false}
    })
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    // console.log(emojis)

    const {feedbackRecived} = this.state

    return (
      <div className="app-container">
        {feedbackRecived ? (
          <div className="feedback-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id}>
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="image"
                    onClick={this.onReceiveFeedback}
                  />
                  <p>{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="thankyou-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
