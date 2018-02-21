const helper = require("protractor-helper");

const CreateComputersPage = require("../page-objects/createComputers");

const CommonElementsComponent = require("../components/commonElements");

describe("when accessing the relative URL 'computers/new'", () => {
    const createComputersPage = new CreateComputersPage();

    const commonElements = new CommonElementsComponent();

    beforeEach(() => browser.get(createComputersPage.relativeUrl));

    it("shows an h1 element with text equal to 'Add a computer'", () => {
        const expectedTitle = "Add a computer";

        helper.waitForTextToBePresentInElement(commonElements.title, expectedTitle);
    });

    describe("happy path", () => {
        describe("when providing valid data and clicking submit", () => {
            it("displays a warning message confirming the computer's successfully creation", () => {
                const successMessage = createComputersPage.form.fillWithValidDataAndSubmit();

                helper.waitForTextToBePresentInElement(commonElements.warningMessage, successMessage);
            });
        });
    });
});
