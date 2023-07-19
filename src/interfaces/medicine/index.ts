import { SaleInterface } from 'interfaces/sale';
import { PharmacyInterface } from 'interfaces/pharmacy';
import { GetQueryInterface } from 'interfaces';

export interface MedicineInterface {
  id?: string;
  name: string;
  description?: string;
  pharmacy_id?: string;
  created_at?: any;
  updated_at?: any;
  sale?: SaleInterface[];
  pharmacy?: PharmacyInterface;
  _count?: {
    sale?: number;
  };
}

export interface MedicineGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  pharmacy_id?: string;
}
