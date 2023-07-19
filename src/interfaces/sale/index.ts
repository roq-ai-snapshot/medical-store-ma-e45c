import { MedicineInterface } from 'interfaces/medicine';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SaleInterface {
  id?: string;
  medicine_id?: string;
  customer_id?: string;
  quantity: number;
  sale_date: any;
  created_at?: any;
  updated_at?: any;

  medicine?: MedicineInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SaleGetQueryInterface extends GetQueryInterface {
  id?: string;
  medicine_id?: string;
  customer_id?: string;
}
