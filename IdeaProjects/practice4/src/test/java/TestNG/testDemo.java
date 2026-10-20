package TestNG;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;


public class testDemo {


        @Test
        public void selectSecondSuggestion() throws InterruptedException {

            WebDriver driver = new ChromeDriver();

            driver.get("https://www.google.com");

            driver.findElement(By.name("..")).sendKeys("cricket");

            Thread.sleep(2000);

            List<WebElement> suggestions =
                    driver.findElements(By.xpath("//ul[@role='listbox']//li"));

            Assert.assertTrue(suggestions.size() > 1, "Second suggestion not found");

            Assert.assertTrue(suggestions.get(1).isDisplayed(), "Second suggestion is not displayed");

            suggestions.get(1).click();

            Thread.sleep(2000);

            driver.quit();
        }
        @Test
    public void hello() {
            System.out.println("hello");
        }
    }



