package practice123;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class Date_calender
{
    public static void main(String[] args) throws InterruptedException
    {
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.goibibo.com/");  // Or any calendar site

        Thread.sleep(2000); // Wait for popup to load
        driver.findElement(By.xpath("//span[@class=\"logSprite icClose\"]")).click();

        // Click on "Departure" calendar input
        driver.findElement(By.xpath("//span[text()='Departure']")).click();
        String targetMonthYear = "June 2026";
        String targetDay = "15";

        while (true)
        {
            // Get currently visible month-year text

           WebElement currentMonthYearElement = driver.findElement(By.xpath("(//div[@class='DayPicker-Caption']/div)[1]"));

            if (currentMonthYearElement.getText().equalsIgnoreCase(targetMonthYear))
            {
                break;
            }
            else
            {// Click next month button
                driver.findElement(By.xpath("//span[@aria-label='Next Month']")).click();
                Thread.sleep(1000);
            }
        }
        // Select day
       // List<WebElement> allDates = driver.findElements(By.xpath("//div[contains(@class,'DayPicker-Day') and not(contains(@class,'disabled'))]//p"));
        List<WebElement> allDates = driver.findElements(By.xpath("//div[@class=\"DayPicker-Day\"]"));

        for (WebElement dateElement : allDates) {
            if (dateElement.getText().equals(targetDay)) {
                dateElement.click();
                break;
            }
        }

        // Optionally close the browser
        // driver.quit();
    }
}

