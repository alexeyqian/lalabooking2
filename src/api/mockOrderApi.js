import delay from './delay';

class OrderApi {

  static createOrder(a_order) {
    let order = Object.assign({}, a_order); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (order.customer.firstName.length < minCourseTitleLength) {
          reject(`First must be at least ${minCourseTitleLength} characters.`);
        }

        order.id = 1002;

        resolve(order);
      }, delay);
    });
  }

  static cancelOrder(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        //console.log('order cancelled: ', orderId);
        order.isCancelled = true;
        resolve();
      }, delay);
    });
  }
}

export default OrderApi;
