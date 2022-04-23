import { Model, ModelOptions, QueryContext, ModelObject, CloneOptions } from 'objection';
import { v4 as uuid4 } from 'uuid';

/*
 *  Base class for all data models.
 */
export class BaseModel extends Model {
  public createdAt?: string;
  public updatedAt?: string;
  public id?: string;

  public override async $beforeInsert(queryContext: QueryContext): Promise<void> {
    await super.$beforeInsert(queryContext);
    this.id = uuid4();
    const both = new Date().toISOString();
    this.createdAt = both;
    this.updatedAt = both;
  }

  public override async $beforeUpdate(opt: ModelOptions, queryContext: QueryContext): Promise<void> {
    await super.$beforeUpdate(opt, queryContext);
    this.updatedAt = new Date().toISOString();
  }

  public override toJSON(opt?: CloneOptions): ModelObject<this> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const json: any = super.toJSON(opt);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    delete json.updatedAt;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    delete json.createdAt;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    delete json.deletedAt;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return json;
  }
}
