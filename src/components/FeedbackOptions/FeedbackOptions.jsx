import { Component } from "react";
import { App } from "components/App";

// export class Statistics extends Component {
  
//     render() {
        
//         return (
//             <div className="Statistic">
//                 <section>
//                     <h2>Please leave feedback</h2>
//                     <button type = "button" onClick={this.handleGoodIncrement }>Good</button>
//                     <button type = "button" onClick={this.handleNeutralIncrement}>Neutral</button>
//                     <button type = "button" onClick={this.handleBadIncrement }>Bad</button>
//                 </section>
//                 <section>
//                     <h2>Statistics</h2>
//                     <p>Good:{this.state.good} </p>
//                     <p>Neutral:{this.state.neutral }</p>
//                     <p>Bad:{this.state.bad }</p>
//                     <p>Total:{this.countTotalFeedback() }</p>
//                     <p>Positive feedback:{this. countPositiveFeedbackPercentage()}%</p>
//                 </section>
//             </div>
//         )
//      }
//  }

export const FeedBackOptions = ({onGoodIncrement, onNeutralIncrement, onBadIncrement  }) => (
    <>
        <button type="button" onClick={ onGoodIncrement}>Good</button>
        <button type="button" onClick={onNeutralIncrement }>Neutral</button>
        <button type = "button" onClick={onBadIncrement }>Bad</button>
    </>
)

