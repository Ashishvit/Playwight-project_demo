package TestNG2.Groups;
import org.testng.Assert;
import org.testng.annotations.Test;

public class Payment2 {

        @Test(groups = {"smoke"})
        public void checkoutPageTest() {
            System.out.println("Smoke: Checkout page opens");
            Assert.assertTrue(true);
        }

        @Test(groups = {"sanity"})
        public void paymentSuccessTest() {
            System.out.println("Sanity: Successful payment");
            Assert.assertTrue(true);
        }

        @Test(groups = {"regression"})
        public void paymentFailureTest() {
            System.out.println("Regression: Failed payment handling");
            Assert.assertTrue(true);
        }
    @Test(groups = {"sanity", "regression"})
    public void paymentDeclineTest() {
        System.out.println("Regression: Failed payment handling");
        Assert.assertTrue(true);
    }
    }

