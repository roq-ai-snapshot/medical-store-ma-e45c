const mapping: Record<string, string> = {
  medicines: 'medicine',
  pharmacies: 'pharmacy',
  sales: 'sale',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
