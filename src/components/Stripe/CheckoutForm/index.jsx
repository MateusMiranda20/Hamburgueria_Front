import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../../hooks/CartContext"
import { api } from "../../../services/api.js"
import '../styles.css'

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom"

import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpmCheckerLink },
  } = useLocation()

  const { cartProducts, clearCart } = useCart()

  const navigate = useNavigate()

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe não está disponível no momento. Tente novamente.");
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://seu-site.com/success", // Ajuste a URL conforme necessário
        },
        redirect: "if_required",
      });

      if (error) {
        toast.error(`Erro no pagamento: ${error.message}`);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Enviar pedido ao backend
        const products = cartProducts.map(({ id, quantity, price }) => ({ id, quantity, price }));
        const { status } = await api.post('/orders', { products });

        if (status === 200 || status === 201) {
          toast.success('Pedido realizado com sucesso!');
          clearCart();
          navigate(`/pagamento?payment_intent_client_secret=${paymentIntent.client_secret}`);
        } else {
          toast.error('Erro ao registrar o pedido.');
        }
      } else {
        toast.warn('Pagamento não concluído. Verifique suas informações.');
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      toast.error('Algo deu errado. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };


  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
  
    <div className="container">
      <ToastContainer />
      <form id="payment-form" onSubmit={handleSubmit}>

        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
      <div id="dpm-annotation">
        <p>
          Os métodos de pagamentos são disponibilizados de acordo com a sua região  .&nbsp;
          <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer" id="dpm-integration-checker" className="link">Ver métodos de pagamento</a>
        </p>
      </div>
    </div>
  );
}
