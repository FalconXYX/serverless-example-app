import { OrganizationDataService } from './services/organization-data-service';

export const ds = {
  organization: new OrganizationDataService(),
  account: new OrganizationDataService(),
};
