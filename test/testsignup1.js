const { Builder, By, Key, until } = require("selenium-webdriver");

//1. Test {value} = fashion, perform step 1 with value "fashion".
//2. After step 7, validate the apps to be present on the dashboard.
//3.Dashboard contents:
//- Transactions, Checkout, Connect, Products, Shop, Message, settings


//Sest case 1: check the /fashion path, register a user "test" and check the dashboard contents.
async function testcase1(){
    //Launch the firefox browser.
    let driver = await new Builder().forBrowser("firefox").build();

//Step1: open the url in the path /fashion.
    try{
        //Open url.
        await driver.get("https://commerceos.staging.devpayever.com/registration/fashion")

//Step2: Find and fill the "name" and "last name" field.
        //Oait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.css('input[formControlName="firstName"]')), 5000);
        //Finds the input element for field "name".
        const inputNameElement = await driver.findElement(By.css('input[formControlName="firstName"]'));
        //Fills the field "name".
        await inputNameElement.sendKeys('testname');

        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.css('input[formControlName="lastName"]')), 5000);
        //Find the input element for field "last name".
        const inputLastNameElement = await driver.findElement(By.css('input[formControlName="lastName"]'));
        //Fills the field "last name".
        await inputLastNameElement.sendKeys('testlastname');

//Step3: Find and fill the "email" field.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.css('input[formControlName="email"]')), 5000);
        //Find the input element for field "email".
        const inputEmailElement = await driver.findElement(By.css('input[formControlName="email"]'));
        //Fills the field "email".
        await inputEmailElement.sendKeys('testemail@gmail.com');

//Step4: Find and fill the "password" and "confirm password" field.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.css('input[formControlName="password"]')), 5000);
        //Find the input element for field "password".
        const inputPasswordElement = await driver.findElement(By.css('input[formControlName="password"]'));
        //Fills the field "password".
        await inputPasswordElement.sendKeys('Te5t123');
        
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.css('input[formControlName="confirmPass"]')), 5000);
        //Find the input element for field "confirm password".
        const inputConfirmpasswordElement = await driver.findElement(By.css('input[formControlName="confirmPass"]'));
        //Fills the field "confirm password".
        await inputConfirmpasswordElement.sendKeys('Te5t123');

//Step5: Find and click the "sign up" button.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('signup-button')), 5000);
        //Find the input element for field "confirm password".
        const ButtonSignup = await driver.findElement(By.className('signup-button'));
        //Fills the field "confirm password".
        await ButtonSignup.click();

//Step6: Find and fill the required fields "company name" and "phone number".
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.css('input[formControlName="name"]')), 5000);
        //Find the input element for field "confirm password".
        const inputGetStartedNameElement = await driver.findElement(By.css('input[formControlName="name"]'));
        //Fills the field "confirm password".
        await inputGetStartedNameElement.sendKeys('test');

        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.css('input[formControlName="phoneNumber"]')), 5000);
        //Find the input element for field "confirm password".
        const inputGetStartedPhoneElement = await driver.findElement(By.css('input[formControlName="phoneNumber"]'));
        //Fills the field "confirm password".
        await inputGetStartedPhoneElement.sendKeys('123456789');

//Step7: Find and click the "get started" button.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('signup-button')), 5000);
        //Find the input element for field "confirm password".
        const ButtonGetStartedSignup = await driver.findElement(By.className('signup-button'));
        //Fills the field "confirm password".
        await ButtonGetStartedSignup.click();

//Step8: Find and check for the element: Transactions
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('welcome-screen-content-button')), 5000);
        //Defines the element identification by html text.
        const TransactionDashboardXpathExpression = `//*[contains(text(), '${Transactions}')]`;
        //Find the input element for field "confirm password".
        await driver.findElement(By.xpath(TransactionDashboardXpathExpression));

//Step9: Find and check for the element: Checkout.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('welcome-screen-content-button')), 5000);
        //Defines the element identification by html text.
        const CheckoutDashboardXpathExpression = `//*[contains(text(), '${Checkout}')]`;
        //Find the input element for field "confirm password".
        await driver.findElement(By.xpath(CheckoutDashboardXpathExpression));

//Step10: Find and check for the element: Connect.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('welcome-screen-content-button')), 5000);
        //Defines the element identification by html text.
        const ConnectDashboardXpathExpression = `//*[contains(text(), '${Connect}')]`;
        //Find the input element for field "confirm password".
        await driver.findElement(By.xpath(ConnectDashboardXpathExpression));

//Step11: Find and check for the element: Products.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('welcome-screen-content-button')), 5000);
        //Defines the element identification by html text.
        const ProductsDashboardXpathExpression = `//*[contains(text(), '${Products}')]`;
        //Find the input element for field "confirm password".
        await driver.findElement(By.xpath(ProductsDashboardXpathExpression));

//Step12: Find and check for the element: Shop.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('welcome-screen-content-button')), 5000);
        //Defines the element identification by html text.
        const ShopDashboardXpathExpression = `//*[contains(text(), '${Shop}')]`;
        //Find the input element for field "confirm password".
        await driver.findElement(By.xpath(ShopDashboardXpathExpression));

//Step13: Find and check for the element: Message.
//This will return an error since the element is not present in the page.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('welcome-screen-content-button')), 5000);
        //Defines the element identification by html text.
        const MessageXpathExpression = `//*[contains(text(), '${Message}')]`;
        //Find the input element for field "confirm password".
        await driver.findElement(By.xpath(MessageXpathExpression));

//Step14: Find and check for the element: Settings.
        //Wait for the element to be loaded in DOM.
        await driver.wait(until.elementLocated(By.className('welcome-screen-content-button')), 5000);
        //Defines the element identification by html text.
        const SettingsXpathExpression = `//*[contains(text(), '${Settings}')]`;
        //Find the input element for field "confirm password".
        await driver.findElement(By.xpath(SettingsXpathExpression));

    }finally{
    }
}
testcase1()