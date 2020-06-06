// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiroot: 'https://blindbeez.com.br/api',
  companies: '/companies',
  schedules: '/schedules',
  client_schedule: '/client-scheduler',
  dateReg: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  timeReg: /^([0-2][0-3]|[0-1][0-9]):[0-5][0-9]+$/,
  dateMask: [
    /[0-3]/,
    /[0-9]/,
    '/',
    /[0-1]/,
    /[0-9]/,
    '/',
    /[1-2]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/
  ],  
  timeMask: [
    /[0-2]/,
    /[0-9]|2[0-3]/,
    ':',
    /[0-5]/,
    /[0-9]$/
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
