export const standardReturn = (message = 'Success'): { statusCode: number; body: string } => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
    }),
  };
};
