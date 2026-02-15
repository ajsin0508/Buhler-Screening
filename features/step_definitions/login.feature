Feature:Login Feature

As a user 
I want to login to my account
So that i can use my dashboard

Background:
Given I navigated to the facebook page
When I validate the title of the page

Scenario: Sucessful Login
Then I enter username as "testuser"
And I enter password as "testpassword"
And I click on the login button

Scenario:Succefull login using different credentials
Then I enter username as "testuser1"
And I enter password as "testpassword1"
And I click on the login button