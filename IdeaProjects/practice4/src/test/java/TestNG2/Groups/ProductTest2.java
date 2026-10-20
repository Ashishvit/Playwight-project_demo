package TestNG2.Groups;

import org.testng.Assert;
import org.testng.annotations.Test;

public class ProductTest2 {


        @Test(groups = {"smoke"})
        public void productPageTest() {
            System.out.println("Smoke: Product page opens");
            Assert.assertTrue(true);
        }

        @Test(groups = {"sanity"})
        public void searchProductTest() {
            System.out.println("Sanity: Search product");
            Assert.assertTrue(true);
        }

        @Test(groups = {"regression"})
        public void productFilterTest() {
            System.out.println("Regression: Product filters");
            Assert.assertTrue(true);
        }
    }

