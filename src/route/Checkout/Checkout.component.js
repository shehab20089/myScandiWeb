import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import {BILLING_STEP,DETAILS_STEP,SHIPPING_STEP} from 'SourceRoute/Checkout/Checkout.config';
import ContentWrapper from 'SourceComponent/ContentWrapper';
import './Checkout.override.style.scss'
import StepsProgressBar from 'Component/StepsProgressBar/StepsProgressBar.component';


class Checkout extends SourceCheckout {

    componentDidUpdate() {

        console.log(this.props.checkoutStep);
        
    }
    renderCheckoutProgressBar(){
        const {checkoutStep}=this.props;
        return <div className='Progress-Style'> 
            <StepsProgressBar steps={[{key:SHIPPING_STEP,label:'Shipping'},
            {key:BILLING_STEP,label:'Review and Payments'}
            ,{key:DETAILS_STEP,label:'Details'}
            
            
            ]} currentStep={checkoutStep}></StepsProgressBar> 
        </div>
    }
    render (){
        return (
            <main block="Checkout">
                    {this.renderCheckoutProgressBar()}

                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );    }


}
export default Checkout