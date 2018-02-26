const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports.config = ({
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=1024,768"
            ]
        }
    },
    baseUrl: "http://computer-database.herokuapp.com/",
    specs: ["specs/*.spec.js"],
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: "test-report",
            fileName: "backbase-assignment-test-report",
            fixedScreenshotName: true,
            cleanDestination: false,
            consolidate: true,
            takeScreenshotsOnlyOnFailures: true,
        }));

        afterEach(() => {
            browser.manage().deleteAllCookies();
            return browser.executeScript("sessionStorage.clear(); localStorage.clear();");
        });
    },
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
    },
});
