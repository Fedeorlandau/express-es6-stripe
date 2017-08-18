const stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
);

const stripeController = {
    index: (req, res) => {
        stripe.charges.create({
            amount: 2000,
            currency: "usd",
            source: "tok_visa", // obtained with Stripe.js
            description: "Charge for james.garcia@example.com"
        }, {
            idempotency_key: "vu2uTbjapDFS0aCu"
        }, function(err, charge) {
            res.render('stripe/index', {
                title: 'Charge created',
                charge: JSON.stringify(charge)
            });
        });
    }
};

export default stripeController;

