import fs from 'fs';

import filterDuePayments from './filter-due-payments';

const duePayments = fs.readFileSync('src/data.json', 'utf8');
const frequency = 'Annually';
const productCode = 'PhGCDCvPv1';
const policyNumber = '';

const result = filterDuePayments(
  JSON.parse(duePayments),
  frequency,
  productCode,
  policyNumber,
);
console.log(result);
