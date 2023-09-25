interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'Test',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage image library', 'Manage video library', 'Manage emoji library', 'Manage group chat'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7c7cb1f9-b2d3-4b02-81fc-65476e157550',
};
