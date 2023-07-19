import * as yup from 'yup';

export const saleValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  sale_date: yup.date().required(),
  medicine_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
