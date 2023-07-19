import * as yup from 'yup';

export const medicineValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  pharmacy_id: yup.string().nullable(),
});
