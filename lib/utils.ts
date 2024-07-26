// get env variable while checking if it exists, providing a default value if it doesn't
export const getEnvVariable = (name: string, defaultValue?: string): string => {
  const value = process.env[name];

  if (!value) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`${name} environment variable is not set`);
  }

  // return value ?? defaultValue;
  // console.log('value: ', value);
  return value;
};
