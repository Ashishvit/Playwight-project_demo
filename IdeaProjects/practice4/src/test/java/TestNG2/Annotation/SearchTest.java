package TestNG2.Annotation;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;


    public class SearchTest {

        WebDriver driver;

        @BeforeClass
        public void beforeClass() {
            System.out.println("Search Before Class");
        }

        @BeforeMethod
        public void setUp() {
            driver = new ChromeDriver();
        }

        @Test
        public void verifyProducts() {
            driver.get("https://www.saucedemo.com/");

            driver.findElement(By.xpath("//input[@id='user-name']"))
                    .sendKeys("standard_user");

            driver.findElement(By.xpath("//input[@id='password']"))
                    .sendKeys("secret_sauce");

            driver.findElement(By.xpath("//input[@id='login-button']"))
                    .click();

            Assert.assertTrue(
                    driver.findElements(
                            By.xpath("//div[@class='inventory_item_name']")
                    ).size() > 0
            );
        }

        @AfterMethod
        public void tearDown() {
            if (driver != null) {
                driver.quit();
            }
        }

        @AfterClass
        public void afterClass() {
            System.out.println("Search After Class");
        }
    }

