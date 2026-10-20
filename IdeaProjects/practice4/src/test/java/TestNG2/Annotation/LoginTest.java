package TestNG2.Annotation;


import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

    public class LoginTest {

        WebDriver driver;

        @BeforeSuite
        public void beforeSuite() {
            System.out.println("Before Suite");
        }

        @BeforeTest
        public void beforeTest() {
            System.out.println("Before Test");
        }

        @BeforeClass
        public void beforeClass() {
            System.out.println("Before Class");
        }

        @BeforeMethod
        public void setUp() {
            driver = new ChromeDriver();
            driver.manage().window().maximize();
        }

        @Test
        public void loginTest() {
            driver.get("https://www.saucedemo.com/");

            driver.findElement(By.xpath("//input[@id='user-name']"))
                    .sendKeys("standard_user");

            driver.findElement(By.xpath("//input[@id='password']"))
                    .sendKeys("secret_sauce");

            driver.findElement(By.xpath("//input[@id='login-button']"))
                    .click();

            Assert.assertEquals(
                    driver.findElement(By.xpath("//span[@class='title']"))
                            .getText(),
                    "Products"
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
            System.out.println("After Class");
        }

        @AfterTest
        public void afterTest() {
            System.out.println("After Test");
        }

        @AfterSuite
        public void afterSuite() {
            System.out.println("After Suite");
        }
    }

