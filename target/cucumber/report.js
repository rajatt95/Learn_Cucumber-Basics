$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  In order to perform successful login\n  As a User\n  I want to enter correct username and password",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "In order to verify the login to facebook",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to facebook site",
  "keyword": "Given "
});
formatter.step({
  "name": "user validates the homepage URL",
  "keyword": "When "
});
formatter.step({
  "name": "user entered \"\u003cusername\u003e\" username",
  "keyword": "Then "
});
formatter.step({
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "user select the age category",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ]
    },
    {
      "cells": [
        "below 18",
        "India"
      ]
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ]
    }
  ]
});
formatter.step({
  "name": "user \"\u003cloginType\u003e\" successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ]
    },
    {
      "cells": [
        "valid",
        "valid",
        "should"
      ]
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldNot"
      ]
    }
  ]
});
formatter.scenario({
  "name": "In order to verify the login to facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook site",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_navigates_to_facebook_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage URL",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_validates_the_homepage_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"valid\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_entered_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"valid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_entered_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ]
    },
    {
      "cells": [
        "below 18",
        "India"
      ]
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_select_the_age_category(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"should\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to verify the login to facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook site",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_navigates_to_facebook_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage URL",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_validates_the_homepage_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"invalid\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_entered_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"invalid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_entered_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ]
    },
    {
      "cells": [
        "below 18",
        "India"
      ]
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_select_the_age_category(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldNot\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginToProd.feature");
formatter.feature({
  "name": "Login to Production",
  "description": "In order to perform successful login to Production\nAs a User\nI want to enter correct username and password",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@bvt"
    },
    {
      "name": "@prod"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook site",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_navigates_to_facebook_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage URL",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_validates_the_homepage_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to verify the login to facebook production",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@bvt"
    },
    {
      "name": "@prod"
    }
  ]
});
formatter.step({
  "name": "user entered \"valid\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_entered_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"valid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_entered_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the Captcha Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_Captcha_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldBe\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook site",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_navigates_to_facebook_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage URL",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_validates_the_homepage_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to verify the login to facebook production",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@bvt"
    },
    {
      "name": "@prod"
    }
  ]
});
formatter.step({
  "name": "user entered \"invalid\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_entered_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"invalid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_entered_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the Captcha Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_Captcha_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldNot\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});