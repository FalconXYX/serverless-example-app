import { Account } from '../models/account';
import { DataService } from './data-service';

export class OrganizationDataService extends DataService {
  constructor() {
    super(Account);
  }
}
