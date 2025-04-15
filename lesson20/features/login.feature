Feature: Qase.io Login

  Scenario: Log in to Qase.io
    Given I open the Qase.io login page
    When I log in with:
      | username           | password            |
      | trushelena1996@gmail.com  | As2688AsTreshsd21$         |
    Then I should see the user avatar

