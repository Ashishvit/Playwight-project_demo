package practice123;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

import java.time.Duration;
import java.util.List;
public class Extent_Report
{
    ExtentReports extent;
    @BeforeTest
    public void config()
    {
        String path = System.getProperty("user.dir")+"\\reports\\index.html";
        ExtentSparkReporter reporter = new ExtentSparkReporter(path);
        reporter.config().setReportName("Web Ashish Automation Results");
        reporter.config().setDocumentTitle("Test Ashish Results");
         extent = new ExtentReports();
        extent.attachReporter(reporter);
        extent.setSystemInfo("Tester", "Ashish");


    }
    @Test
    public void initialDemo()
    {
        extent.createTest("initialDemo");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.facebook.com");
        System.out.println(driver.getTitle());
        extent.flush();
    }
}
