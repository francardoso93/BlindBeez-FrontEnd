import { commonEnvironmentVariables } from './common';

export const environment = {
  production: true,
  apiroot: 'https://blindbeez.com.br/api',
  companies: commonEnvironmentVariables.companies,
  schedules: commonEnvironmentVariables.schedules,
  client_schedule: commonEnvironmentVariables.client_schedule,
  validationErrorTimeout: commonEnvironmentVariables.validationErrorTimeout,
  refreshTableTimeout: commonEnvironmentVariables.refreshTableTimeout,
  dateReg: commonEnvironmentVariables.dateReg,
  timeReg: commonEnvironmentVariables.timeReg,
  dateMask: commonEnvironmentVariables.dateMask,
  timeMask: commonEnvironmentVariables.timeMask,
};

