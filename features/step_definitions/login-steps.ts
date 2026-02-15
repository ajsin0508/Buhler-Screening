  import { Given, When, Then } from '@cucumber/cucumber';
  

  
  Given('I navigated to the facebook page', function () {
          console.log('I navigated to the facebook page');
         });

   

   When('I validate the title of the page', function () {
         console.log('I validate the title of the page');
         });

 

   Then('I enter username as {string}', function (string) {
           console.log('I enter username as ' + string);
         });

  

  Then('I enter password as {string}', function (string) {
          console.log('I enter password as ' + string);
         });

   

  Then('I click on the login button', function () {
         console.log('I click on the login button');
         });



