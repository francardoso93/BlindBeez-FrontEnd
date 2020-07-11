// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json"),
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  plugins: [
    {
      displayHelpUrl: true,  // Displays the aXe help URL along with the error. Defaults to true.
      displayContext: true, // Displays the HTML of interest. Defaults to true.
      displayPasses: true , // Display pass results. Defaults to true.
      displayViolations: true, // Display vioaltions. Defaults to true.
      standardsToReport: ["wcag2a", "wcag2aa"], // A list of standards to report on. If empty, reports on all standards.
      ignoreAxeFailures: false, // If true, aXe failures won't cause the whole test to fail. Defaults to false
      package: "protractor-axe-report-plugin",
    },
  ],
};
