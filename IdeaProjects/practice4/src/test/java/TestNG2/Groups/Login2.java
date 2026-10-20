package TestNG2.Groups;
import org.testng.Assert;
import org.testng.annotations.Test;

public class Login2 {

    @Test(groups = {"smoke"})
    public void validLoginTest() {
        System.out.println("Smoke: Valid login");
        Assert.assertTrue(true);
    }

    @Test(groups = {"sanity"})
    public void invalidLoginTest() {
        System.out.println("Sanity: Invalid login");
        Assert.assertTrue(true);
    }

    @Test(groups = {"regression"})
    public void forgotPasswordTest() {
        System.out.println("Regression: Forgot password");
        Assert.assertTrue(true);
    }
}
