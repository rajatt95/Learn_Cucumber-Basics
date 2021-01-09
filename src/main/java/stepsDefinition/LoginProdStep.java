package stepsDefinition;

import io.cucumber.java.en.Then;

public class LoginProdStep {

	@Then("user validates the Captcha Image")
	public void user_validates_the_Captcha_Image() {

		System.out.println("@Then(\"user validates the Captcha Image\")");
	}

}
