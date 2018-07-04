import delay from './delay';

class PaymentApi {

  static createPayment(a_payment) {
    let payment = Object.assign({}, a_payment); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (payment.creditCard.Name.length < minCourseTitleLength) {
          reject(`Name must be at least ${minCourseTitleLength} characters.`);
        }

        payment.id = 1002;
        payment.paid = true;

        resolve(payment);
      }, delay);
    });
  }


}

export default PaymentApi;
