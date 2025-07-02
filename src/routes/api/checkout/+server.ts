import type { RequestHandler } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
    typescript: true, 
});

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const referralId = body.referral || 'no-referral';
console.log('Referral ID ID:', referralId);
    const session = await stripe.checkout.sessions.create({
    
      success_url: 'https://checkout-ref.vercel.app/success',
  cancel_url: 'https://checkout-ref.vercel.app/cancel',
    metadata: {
        promotekit_referral: referralId,
    },
    line_items: [
    {price: 'price_1OBQlV2eZvKYlo2CDL02DbMx', quantity: 1},
    ],
    mode: 'subscription',
});

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err:any) {
     console.error('Stripe error:', err.message, err.stack);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500
    });
  }
};
