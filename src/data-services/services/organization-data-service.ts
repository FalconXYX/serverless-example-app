import { Organization } from '../models/organization';
import { DataService } from './data-service';

export class OrganizationDataService extends DataService {
  constructor() {
    super(Organization);
  }
}
