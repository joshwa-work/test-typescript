const filterDuePayments = (
  duePayments: Object[],
  frequency?: string,
  productCode?: string,
  policyNumber?: string,
) => {
  let result = duePayments;

  if (frequency) {
    result = result.filter(data => data.premiumPaymentFrequency === frequency);
  }

  if (productCode) {
    result = result.filter(data => data.productCode === productCode);
  }

  if (policyNumber) {
    result = result.filter(data => data.policyNumber === policyNumber);
  }

  return result;
};

export default filterDuePayments;
