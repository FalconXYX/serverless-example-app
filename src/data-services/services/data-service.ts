import { Model } from 'objection';

export class DataService {
  protected model: typeof Model;

  constructor(model: typeof Model) {
    this.model = model;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  public create = (data: Record<string, unknown>) => this.model.query().insertAndFetch(data);

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  public get = (data: Record<string, unknown>) => this.model.query().findOne(data);
}
