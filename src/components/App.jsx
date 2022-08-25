import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreaseStats = data => {
    this.setState(prevState => {
      return { [data]: prevState[data] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, data) => {
      return total + data;
    }, 0);
  };

  firstLetterLarge = string => {
    const splitedType = string.split('');
    const firstLetter = splitedType[0].toUpperCase();
    const typeCopy = [...splitedType];
    typeCopy.splice(0, 1);
    const result = [firstLetter, ...typeCopy].join('');
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0;
    }
    return Math.floor((this.state.good * 100) / total);
  };

  render() {
    const feedbackTypes = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className="wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackTypes}
            onLeaveFeedback={this.handleIncreaseStats}
            firstLetterLarge={this.firstLetterLarge}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              firstLetterLarge={this.firstLetterLarge}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
