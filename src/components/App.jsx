
import { Component } from "react";
import { FeedBackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
    } 

    handleGoodIncrement = () =>{ 
       this.setState(prevState => (
            {
                good: prevState.good + 1,
        } 
         
    ));
    };

     handleNeutralIncrement = () => {
       this.setState(prevState => (
            {
                neutral: prevState.neutral + 1,
            }          
        ));
    };
handleBadIncrement = () => {
       this.setState(prevState => (
            {
                bad: prevState.bad + 1,
            }          
        ));
    };
    countTotalFeedback = () => { 
        const { good, neutral, bad } = this.state;
        return  good + neutral + bad; 
       
    }

    countPositiveFeedbackPercentage = () => { 
        const { good} = this.state;
        return Math.round((good * 100) /this.countTotalFeedback());
  }

  render() {
    return (
    <>
      <Section title = "Please leave feedback">
        <FeedBackOptions
          onGoodIncrement={this.handleGoodIncrement}
          onNeutralIncrement={this.handleNeutralIncrement}
          onBadIncrement={this.handleBadIncrement }
        />
        </Section>  
            <Section title= "Statistics">
        <Statistics
          good={ this.state.good}
          neutral={this.state.neutral }
          bad={this.state.bad  }
          total={this.countTotalFeedback() }
          positivePercentage={this.countPositiveFeedbackPercentage()}/>
            </Section>        
        
    
    </>
  )
    
  }
  
 }