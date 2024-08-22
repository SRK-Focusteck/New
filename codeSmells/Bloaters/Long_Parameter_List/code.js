function createOrder(customerId, productId, quantity, discountCode, shippingMethod, deliveryDate) {
    // Order creation logic
}

/**
 * Solution: Use a parameter object
Bundle related parameters into a cohesive object.
 */

class OrderRequest {
    constructor(customerId, productId, quantity, discountCode, shippingMethod, deliveryDate) {
        this.customerId = customerId;
        this.productId = productId;
        this.quantity = quantity;
        this.discountCode = discountCode;
        this.shippingMethod = shippingMethod;
        this.deliveryDate = deliveryDate;
    }
}

function createOrder(orderRequest) {
    // Order creation logic
}

const orderRequest = new OrderRequest(1, 100, 2, 'DISCOUNT10', 'standard', '2024-08-23');
createOrder(orderRequest);
