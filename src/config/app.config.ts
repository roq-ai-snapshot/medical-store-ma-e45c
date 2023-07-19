interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Pharmacist'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Manager', 'Pharmacist', 'Sales Representative'],
  tenantName: 'Pharmacy',
  applicationName: 'medical Store Management ',
  addOns: ['chat', 'notifications', 'file'],
};
