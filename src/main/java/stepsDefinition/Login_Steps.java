package stepsDefinition;

import java.util.List;
import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login_Steps {

	// Hooks
	// @Before - imported from io.cucumber
	// This method will run before every scenario
	@Before
	public void setup() {
		System.out.println("@Before - Launching Browser");
	}

	@After
	public void tearDown() {
		System.out.println("@After - Quit Browser");
	}

	@Before("@prod")
	public void setupProd() {
		System.out.println("@Before - Launching Browser - PROD");
	}

	@After("@prod")
	public void tearDownProd() {
		System.out.println("@After - Quit Browser - PROD");
	}

	@Given("user navigates to facebook site")
	public void user_navigates_to_facebook_site() {
		System.out.println("@Given(\"user navigates to facebook site\")");
	}

	@When("user validates the homepage URL")
	public void user_validates_the_homepage_URL() {
		System.out.println("@When(\"user validates the homepage URL\")");
	}

	@Given("user navigates to facebook website")
	public void user_navigates_to_facebook_website() {
		System.out.println("	@Given(\"user navigates to facebook website\")");
	}

	@When("user validates the homepage title")
	public void user_validates_the_homepage_title() {
		System.out.println("@When(\"user validates the homepage title\")");
	}

	@Then("user entered {string} username")
	public void user_entered_username(String string) {
		System.out.println("@Then(\"user entered {string} username\")");
	}

	@Then("user entered {string} password")
	public void user_entered_password(String string) {
		System.out.println("@Then(\"user entered {string} password\")");
	}

	@Then("user {string} successfully logged in")
	public void user_successfully_logged_in(String string) {
		System.out.println("@Then(\"user {string} successfully logged in\")");
	}

	@Then("user select the age category")
	// public void user_select_the_age_category(List<String> listOfAgeCategory) {
	public void user_select_the_age_category(DataTable dataTable) {
		System.out.println("@Then(\"user select the age category\")");
		List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
		System.out.println("data.get(0) - " + data.get(0));
		System.out.println("data.get(0).get(\"Age\") - " + data.get(0).get("Age"));
		System.out.println("data.get(0).get(\"Location\") - " + data.get(0).get("Location"));

		System.out.println("data.get(1) - " + data.get(1));
		System.out.println("data.get(1).get(\"Age\") - " + data.get(1).get("Age"));
		System.out.println("data.get(1).get(\"Location\") - " + data.get(1).get("Location"));

		/*
		 * System.out.println("listOfAgeCategory.get(1)) - " +
		 * listOfAgeCategory.get(1)); System.out.println("listOfAgeCategory.get(2)) - "
		 * + listOfAgeCategory.get(2));
		 */ }
}
