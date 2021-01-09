@Regression @bvt @prod
Feature: Login to Production

In order to perform successful login to Production
As a User
I want to enter correct username and password

#Steps under will be executed before any scenario runs 
Background:
		Given user navigates to facebook site
		When user validates the homepage URL
		
Scenario: In order to verify the login to facebook production
#		Given user navigates to facebook site
#		When user validates the homepage URL
		Then user entered "valid" username
		And user entered "valid" password
		And user validates the Captcha Image
		Then user "shouldBe" successfully logged in
		
		
Scenario: In order to verify the login to facebook production
#		Given user navigates to facebook site
#		When user validates the homepage URL
		Then user entered "invalid" username
		And user entered "invalid" password
		And user validates the Captcha Image
		Then user "shouldNot" successfully logged in
			

