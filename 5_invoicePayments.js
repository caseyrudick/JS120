// factory function creating an object
createPayment = (services = {}) => {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    miscAmount: services.amount || 0,
    total (){
      return this.miscAmount || this.phone + this.internet
    },
  }
}

// factory function creating an object
createInvoice = (service = {}) => {
  return {
    phone: service.phone || 3000,
    internet: service.internet || 5500,
    payments: [],
    invoiceTotal() {
      return this.phone + this.internet
    },
    addPayment(payment) {
      return this.payments.push(payment)
    },
    addPayments(payments) { 
      return payments.forEach(payment => {
        this.addPayment(payment)
      });
    },
    totalPaid() {
      return this.payments.reduce((sum, currentVal) => sum + currentVal.total(),0)
    },
    amountDue() {
      return this.invoiceTotal() - this.totalPaid()
    }
  }
}

let payment3 = createPayment({internet: 5000})
let payment2 = createPayment({phone: 3000})
let invoice1 = createInvoice({phone: 4000})
// console.log(invoice1)
invoice1.addPayments([payment3,payment2])
console.log(invoice1.amountDue())
//console.log(invoice1.totalPaid())
// function
// getTotalPayments = (paid) => {
//   return paid.reduce((sum, currentVal) => sum + currentVal.total(),0)
// }