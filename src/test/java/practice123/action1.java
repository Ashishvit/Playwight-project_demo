package practice123;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.List;
public class action1
{
public static void main(String args[])
{
    WebDriver driver = new ChromeDriver();
    //perfom mouse hover
  //driver.get("https://www.amazon.com/");
  //  driver.manage().window().maximize();
 // WebElement element =  driver.findElement(By.id("nav-link-accountList"));
//Actions action = new Actions(driver);
  //action.moveToElement(element).perform();// mouse hover

 // perform double click
   //driver.get("https://vinothqaacademy.com/mouse-event/");
  //  driver.manage().window().maximize();
   // WebElement element = driver.findElement(By.xpath("//button[@id='dblclick']"));
   //  Actions actions = new Actions(driver);
    // actions.doubleClick(element).perform();
    //drag and drop
    driver.get("https://vinothqaacademy.com/mouse-event/");
    WebElement source = driver.findElement(By.xpath("//div[@ondragstart=\"drag(event)\"]"));
    WebElement target = driver.findElement(By.xpath("//div[@ondragover=\"allowDrop(event)\"]"));

    // Create Actions object
    Actions actions = new Actions(driver);

    // Perform drag and drop
    actions.dragAndDrop(source, target).build().perform();



}
}

