import { AuditLog, AUDIT_CONTEXT_TYPE, AUDIT_EVENTS } from '../models/audit-log';

export const logAdminEvent = async (event: string, data?: Record<string, unknown>): Promise<boolean> =>
  logEvent(AUDIT_CONTEXT_TYPE.ADMIN, event, data);

export const logCustodyEvent = async (event: string, data?: Record<string, unknown>): Promise<boolean> =>
  logEvent(AUDIT_CONTEXT_TYPE.CUSTODY, event, data);

export const logUserEvent = async (event: string, data?: Record<string, unknown>): Promise<boolean> =>
  logEvent(AUDIT_CONTEXT_TYPE.USER, event, data);

const logEvent = async (context: AUDIT_CONTEXT_TYPE, event: string, data?: Record<string, unknown>): Promise<boolean> => {
  if (!AUDIT_EVENTS.includes(event)) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  data ? await AuditLog.query().insert({ context, event, data }) : await AuditLog.query().insert({ context, event });

  return true;
};
