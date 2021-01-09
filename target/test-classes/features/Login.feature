#Tags
@Sanity @smoke
Feature: Login
  
  In order to perform successful login
  As a User
  I want to enter correct username and password

  Scenario Outline: In order to verify the login to facebook
    Given user navigates to facebook site
    When user validates the homepage URL
    Then user entered "<username>" username
    And user entered "<password>" password
    And user select the age category
      # These below values will be passed as list
      | Age      | Location |
      | below 18 | India    |
      | Above 18 | USA      |
    Then user "<loginType>" successfully logged in

    Examples: 
      | username | password | loginType |
      | valid    | valid    | should    |
      | invalid  | invalid  | shouldNot |
