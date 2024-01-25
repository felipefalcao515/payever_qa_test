Introduction.
Hi
This project was created for the Payever technical assessment, my application key is CR-22640.

The commands for running the project are the following for each test case.
Test case 1:
1. Test {value} = fashion, perform step 1 with value "fashion"
2. After step 7, validate the following apps to be present on the dashboard:
- Transactions, Checkout, Connect, Products, Shop, Message, settings

Command: node test/testsignup1.js

Test case 2:
1. Test {value} = fashion, perform step 1 with value "santander"
2. After step 7, validate the following apps to be present on the dashboard:
- Transactions, Checkout, Connect, Point of Sale, Settings

Command: node test/testsignup2.js


Defects.
I have found two defects while testing, which i have reported in the provided email (teamhr@payever.org). The defects are the following.

Fashion dashboard doesn't show the Message app:
While validating the dashboard in the Fashion path, I noticed the Message app doesn't appear. However I did find an icon for it in the topright corner.

Santander page doesn't open, stuck in perpetual loading:
While validating the santander page I've found it doesn't open, it stays in a perpetual loading screen with an rotating icon in the center of the page.


Conclusion.
None of the tests have passed due to the defects and lack of more detailed documentation, the project would require dev team assistance in order to progress any further.