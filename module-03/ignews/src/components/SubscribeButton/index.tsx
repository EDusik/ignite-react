import { signIn, useSession } from "next-auth/client";
import { getStripeJs } from "../../services/stripe-js";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [section] = useSession();

  async function handleSubscribe() {
    if (!section) {
      signIn("gitHub");
      return;
    }

    try {
      const response = await api.post("/subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}
