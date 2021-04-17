import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SimpleCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [err, setErr] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErr(error.message)
            setSuccess(null)
        } else {
            setSuccess(paymentMethod.id)
            setErr(null)
        }
    };

    return (
        <div>
            <form className="text-center" onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-outline-info" type="submit" disabled={!stripe}>
                    Pay
                    </button>
            </form>
            {
                err && <p className="text-danger text-uppercase text-center mt-3">{err}</p>
            }
            {
                success && <p className="text-success text-uppercase text-center mt-3">your payment has been successfully done .Now you have to click buy now page for buy this product.</p>
            }
            <div className="text-center mt-3">
                <Link to="/buy">
                    <button className="btn btn-outline-warning">
                        Go Buy Page
                    </button>
                </Link>
            </div>

        </div>

    );
};
export default SimpleCardForm;