// #27
// rewrite the following to use object-literal syntax to generate the 
// returned object
// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   }
// }

// we will create a simple invoice processing program

// let invoice = {
//   phone: 3000,
//   internet: 6500,
// }
// let payment = {
//   phone: 1300,
//   internet: 5500,
// }
// let invoiceTotal = invoice.phone + invoice.internet
// let paymentTotal = payment.phone + payment.internet
// let remainingDue = invoiceTotal - paymentTotal

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

function createInvoice(services = {}){
  return {
    phoneInvoice: services.phone || 3000,
    internetInvoice: services.internet || 5500,
    payments: [],
    invoiceTotal: 0,
    paymentTotal: 0,
    invoiceTotal() {
      return this.phoneInvoice + this.internetInvoice
    },
    addPayment(payment){
      this.payments.push(payment)
    },
    addPayments(payment){
      payment.forEach(val => this.addPayment(val))
    },
    paymentAmount(){
      return this.payments.reduce((sum, currentVal) => sum + currentVal.total(),0)
    },
    amountDue(){
      console.log(`${this.invoiceTotal}`)
      return this.invoiceTotal() - this.paymentAmount()
    }
  }
}

function getInvoiceTotal(invoices) {
  let result = 0
  for (let obj = 0; obj < invoices.length; obj++) {
    result += invoices[obj].invoiceTotal()
  }
  return result
}

let invoices = [];
invoices.push(createInvoice())
console.log(invoices)
function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total() {
      return this.amount || this.phone + this.internet
    }
  }
}

let payment1 = createPayment({amount:2000})
let payment2 = createPayment({phone: 3500})
let invoice1 = createInvoice({
  phone: 1200, 
  internet: 4000,
})


invoice1.addPayment(payment1),
invoice1.addPayment(payment2)
console.log(payment1.total())
//console.log(invoice.payments)
console.log(invoice1.amountDue())

// console.log(typeof invoice.addPayment)
// function getPaymentTotal(payments) {
//   return payments.reduce((sum, currentVal) => sum + currentVal.total(),0)
// }

// let payments = []
// payments.push(createPayment())
// console.log(payments)
// console.log(getPaymentTotal(payments))