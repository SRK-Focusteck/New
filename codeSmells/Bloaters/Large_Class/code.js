class OrderProcessor {
    process(order) {
        // Calculate total
        let total = this.calculateTotal(order);

        // Apply discounts
        if (order.items.length > 10) {
            total = total * 0.9;
        }

        // Process payment
        if (order.paymentType === 'creditCard') {
            this.chargeCreditCard(order.customer, total);
        } else {
            this.processPayPal(order.customer, total);
        }

        // Send email
        this.sendEmail(order.customer.email, 'Order Confirmation', 'Your order is confirmed.');
    }

    calculateTotal(order) {
        return order.items.reduce((acc, item) => acc + item.price, 0);
    }

    chargeCreditCard(customer, total) {
        // Credit card processing logic
    }

    processPayPal(customer, total) {
        // PayPal processing logic
    }

    sendEmail(to, subject, body) {
        // Email sending logic
    }
}

/**
 * Solution: Extract smaller classes
   Separate the logic into more cohesive classes.
 */

class OrderProcessor {
    constructor(paymentProcessor, emailService) {
        this.paymentProcessor = paymentProcessor;
        this.emailService = emailService;
    }

    process(order) {
        const total = this.calculateTotal(order);
        this.paymentProcessor.processPayment(order.customer, total, order.paymentType);
        this.emailService.sendConfirmationEmail(order.customer.email);
    }

    calculateTotal(order) {
        return order.items.reduce((acc, item) => acc + item.price, 0);
    }
}

class PaymentProcessor {
    processPayment(customer, total, paymentType) {
        if (paymentType === 'creditCard') {
            this.chargeCreditCard(customer, total);
        } else {
            this.processPayPal(customer, total);
        }
    }

    chargeCreditCard(customer, total) {
        // Credit card processing logic
    }

    processPayPal(customer, total) {
        // PayPal processing logic
    }
}

class EmailService {
    sendConfirmationEmail(to) {
        // Email sending logic
    }
}
