import { App } from "components/App";

//  <p>Good:{this.state.good} </p>
//                     <p>Neutral:{this.state.neutral }</p>
//                     <p>Bad:{this.state.bad }</p>
//                     <p>Total:{this.countTotalFeedback() }</p>
//                     <p>Positive feedback:{this. countPositiveFeedbackPercentage()}%</p>

export const Statistics = ({ good, neutral, bad, total,  positivePercentage}) => (
    <div>
        <p>Good:{good} </p>
        <p>Neutral:{neutral }</p>
                    <p>Bad:{bad }</p>
                    <p>Total:{total}</p>
                    <p>Positive feedback:{positivePercentage}%</p>
</div>
)