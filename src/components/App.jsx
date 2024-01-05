import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countPos = total => {
    if (total > 0) {
      return Math.round((this.state.good / total) * 100);
    } else {
      return 0;
    }
  };
  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    this.countPos(total);
    return total;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);

    return (
      <div>
        <Section title="leave your feedback">
          <FeedbackOptions
            funcRate={this.handleChange}
            options={feedbackOptions}
          />
        </Section>
        {this.countTotalFeedback() < 1 ? (
          <Section title="Statistics">
            <p>Nothing</p>
          </Section>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              bad={bad}
              total={this.countTotalFeedback()}
              neutral={neutral}
              pos={this.countPos(this.countTotalFeedback())}
            />
          </Section>
        )}
      </div>
    );
  }
}
