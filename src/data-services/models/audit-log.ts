import { Model, snakeCaseMappers, JSONSchema, QueryContext } from 'objection';

export enum AUDIT_CONTEXT_TYPE {
  ADMIN = 'admin',
  CUSTODY = 'custody',
  USER = 'user',
}

export const AUDIT_EVENTS = ['organization_added', 'user_added', 'deposit_notification'];

export class AuditLog extends Model {
  public static override tableName = 'audit_logs';
  public static override columnNameMappers = snakeCaseMappers();

  public static override jsonSchema: JSONSchema = {
    type: 'object',
    required: ['context', 'event'],

    properties: {
      name: { type: 'string', minLength: 1, maxLength: 32 },
    },
  };

  public createdAt?: string;
  public event?: string;
  public context?: AUDIT_CONTEXT_TYPE;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public data?: any;

  public static override get idColumn(): string {
    return 'event';
  }

  public override async $beforeInsert(queryContext: QueryContext): Promise<void> {
    await super.$beforeInsert(queryContext);
    this.createdAt = new Date().toISOString();
  }
}
