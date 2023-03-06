// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Component } from "react";
import { FeedBackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

// export function App() {
//   return (
//     <div>
// <Statistics/>
//     </div>
//   )
// }


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
      
        <FeedBackOptions
          onGoodIncrement={this.handleGoodIncrement}
          onNeutralIncrement={this.handleNeutralIncrement}
          onBadIncrement={this.handleBadIncrement }
        />
  
        <Statistics
          good={ this.state.good}
          neutral={this.state.neutral }
          bad={this.state.bad  }
          total={this.countTotalFeedback() }
          positivePercentage={this. countPositiveFeedbackPercentage() }></Statistics>
        
    
    </>
  )
    
  }
  
 }