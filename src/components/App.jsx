import { Component } from 'react';
import {Helmet} from "react-helmet";
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (options) => { 
    this.setState(prevState => ({
        [options]: prevState[options] + 1,
    }))
  }
 
  // handleGoodIncrement = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleNeutralIncrement = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBadIncrement = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    console.log(good)
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Feedback book</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Testing icons and title" />
            </Helmet>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
            // onGoodIncrement={this.handleGoodIncrement}
            // onNeutralIncrement={this.handleNeutralIncrement}
            // onBadIncrement={this.handleBadIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
