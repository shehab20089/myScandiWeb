import { PureComponent } from "react";
import "./StepsProgressBar.style.scss";
class StepsProgressBar extends PureComponent {
  render() {
    const { steps,currentStep } = this.props;
    const currentIndex=steps.findIndex(step=>step.key===currentStep)
    return (
      <div className="progress-container">
          {currentIndex}
        {steps.map((step,i) => {
            if(steps.length-1==i)
            return null;
          return (
            <div key={step.key} className={`StepItem ${i==currentIndex&&"active"} ${i<currentIndex&&'finished'} ${i==currentIndex-1&&'lastFinished'}`}>
                <div className="stepItem-Index ">
                    
                </div>
                <div>{step.label}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default StepsProgressBar;
