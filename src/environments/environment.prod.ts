import { environment as common } from './environment';

export const environment = {
  production: true,
  apiroot: 'https://blindbeez.com.br/api',
  companies: common.companies,
  schedules: common.schedules,
  client_schedule: common.client_schedule,
  validationErrorTimeout: common.validationErrorTimeout,
  refreshTableTimeout: common.refreshTableTimeout,
  dateReg: common.dateReg,
  timeReg: common.timeReg,
  dateMask: common.dateMask,
  timeMask: common.timeMask,
};
