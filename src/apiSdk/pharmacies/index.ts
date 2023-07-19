import axios from 'axios';
import queryString from 'query-string';
import { PharmacyInterface, PharmacyGetQueryInterface } from 'interfaces/pharmacy';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPharmacies = async (
  query?: PharmacyGetQueryInterface,
): Promise<PaginatedInterface<PharmacyInterface>> => {
  const response = await axios.get('/api/pharmacies', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPharmacy = async (pharmacy: PharmacyInterface) => {
  const response = await axios.post('/api/pharmacies', pharmacy);
  return response.data;
};

export const updatePharmacyById = async (id: string, pharmacy: PharmacyInterface) => {
  const response = await axios.put(`/api/pharmacies/${id}`, pharmacy);
  return response.data;
};

export const getPharmacyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pharmacies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePharmacyById = async (id: string) => {
  const response = await axios.delete(`/api/pharmacies/${id}`);
  return response.data;
};
