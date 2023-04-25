Feature: Contact Us Page
  As a user,
  I want to be able to contact the website admin
  So that I can get help with my issues

Scenario: Contact Us Submission
  Given I navigate to Main Page.
  Then I should see Main Page.
  When I click on the Contact Us button.
  Then I should see the Get in Touch section.
  When I enter my name, email, subject and message.
  And I upload a file.
  Then I click the Submit button.
  Then I should see a success message.
  And I go back to Main Page.
  Then I should see Main Page.


