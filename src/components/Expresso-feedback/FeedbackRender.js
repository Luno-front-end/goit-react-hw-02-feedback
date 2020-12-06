import React from "react";
import Section from "./Section";
import Controls from "./Controls";
import Statistics from "./Statistics";

export default class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleCLick = (e) => {
    // const { data } = this.props;
    const { name } = e.currentTarget;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
  return  Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <Section title="Будь ласка залишіть свій відгук">
          <Controls options={this.state}
            // a={"da", "ni", "tu"}
            onLeaveFeedback={this.handleCLick} />
        </Section>
        <Section title="Статистика">          
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}


