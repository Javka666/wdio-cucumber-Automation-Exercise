Feature: Contact Us Page
  As a user,
  I want to be able to contact the website admin
  So that I can get help with my issues

    @smoke @fast
  Scenario Outline: Contact Us Submission
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Contact Us" button on "Header".
    And Close the advertisement if it appears.
    And Should see "contact Us form" on "Contact Us Page".
    When Fill "<name>" in "name input" on "Contact Us Page".
    * Fill "<email>" in "email input" on "Contact Us Page".
    * Fill "<subject>" in "subject input" on "Contact Us Page".
    * Fill "<message>" in "message input" on "Contact Us Page".
    * Upload "<file>" in "file upload input" on "Contact Us Page".
    When Click "Submit" button on "Contact Us Page".
    And Should see "success message" on "Contact Us Page".
    Then Check that "success message" on "Contact Us Page" contains "Success!".
    When Click "Home" button on "Header".
    Then Should see "Header" on "Main Page".

    Examples:
      | name  | email        | subject   | message      | file      |
      | Alex  | al@alex.com  | Amazing   | Cool Product | Test File |
      | Helga | hel@hell.com | Fantastic | Best Product | Test File |

