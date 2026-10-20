package TestNG2.Annotation;


import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

    public class ProfileTest {

        WebDriver driver;

        @BeforeClass
        public void beforeClass() {
            System.out.println("Profile Before Class");
        }

        @BeforeMethod
        public void setUp() {
            driver = new ChromeDriver();
        }

        @Test
        public void logoutTest() {
            driver.get("https://www.saucedemo.com/");

            driver.findElement(By.xpath("//input[@id='user-name']"))
                    .sendKeys("standard_user");

            driver.findElement(By.xpath("//input[@id='password']"))
                    .sendKeys("secret_sauce");

            driver.findElement(By.xpath("//input[@id='login-button']"))
                    .click();

            driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']"))
                    .click();

            driver.findElement(By.xpath("//a[@id='logout_sidebar_link']"))
                    .click();

            Assert.assertTrue(
                    driver.findElement(By.id("login-button")).isDisplayed()
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
            System.out.println("Profile After Class");
        }
    }

