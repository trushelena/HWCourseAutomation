Feature: Qase.io Login

  Background:
    Given I open the Qase.io login page

  Scenario: Log in to Qase.io with valid credentials
    When I log in with:
      | username                     | trushelena1996@gmail.com             |
      | password     | As2688AsTreshsd21$  |
    Then I should see the user avatar

  Scenario: Log in to Qase.io with invalid credentials
    When I log in with:
      | username                     | wronguser@example.com            |
      | password        | wrongPassword123    |
    Then I should see an error message "Invalid credentials"

  Scenario: Redirect to password reset page
    When I click on the forgot password link
    Then I should be redirected to the password reset page

  Scenario: Reset password with a valid email
    When I click on the forgot password link
    And I reset the password with the email "trushelena1996@gmail.com"
    Then I should see a success message "We have e-mailed your password reset link!"
