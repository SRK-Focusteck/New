// A long method that handles too many responsibilities, making it hard to understand and maintain.

function processOrder(order) {
    let total = 0;

    // Apply discounts
    if (order.items.length > 10) {
        total = applyDiscount(order.items, 0.1);
    } else if (order.customer.isVIP) {
        total = applyDiscount(order.items, 0.05);
    }

    // Process payment
    if (order.paymentType === 'creditCard') {
        chargeCreditCard(order.customer, total);
    } else if (order.paymentType === 'paypal') {
        processPayPal(order.customer, total);
    }

    // Send email confirmation
    sendEmail(order.customer, 'Order Confirmation', generateEmail(order));
}


/**
 * Solution: Refactor into smaller methods
 * Break the method into more focused methods, each handling a single responsibility.
 */

function RefactorProcessOrder(order) {
    const total = calculateTotal(order);
    processPayment(order, total);
    sendConfirmationEmail(order);
}

function calculateTotal(order) {
    if (order.items.length > 10) {
        return applyDiscount(order.items, 0.1);
    } else if (order.customer.isVIP) {
        return applyDiscount(order.items, 0.05);
    }
    return calculatePrice(order.items);
}

function processPayment(order, total) {
    if (order.paymentType === 'creditCard') {
        chargeCreditCard(order.customer, total);
    } else if (order.paymentType === 'paypal') {
        processPayPal(order.customer, total);
    }
}

function sendConfirmationEmail(order) {
    sendEmail(order.customer, 'Order Confirmation', generateEmail(order));
}
