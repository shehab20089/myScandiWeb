import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import {BILLING_STEP,DETAILS_STEP,SHIPPING_STEP} from 'SourceRoute/Checkout/Checkout.config';
import ContentWrapper from 'SourceComponent/ContentWrapper';


class Checkout extends SourceCheckout {

    componentDidUpdate() {

        console.log(this.props.checkoutStep);
        
    }
    // render (){
    //     return (
    //         <main block="Checkout">
    //             <ContentWrapper
    //               wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
    //               label={ __('Checkout page') }
    //             >
    //                 { this.renderSummary(true) }
    //                 <div block="Checkout" elem="Step">
    //                     { this.renderTitle() }
    //                     { this.renderGuestForm() }
    //                     { this.renderStep() }
    //                     { this.renderLoader() }
    //                 </div>
    //                 <div>
    //                     { this.renderSummary() }
    //                     { this.renderPromo() }
    //                     { this.renderCoupon() }
    //                 </div>
    //             </ContentWrapper>
    //         </main>
    //     );    }
    //  renderStep(){

    //      return <div>"mohahah22"</div>
    //  }

}
export default Checkout