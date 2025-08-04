package practice123;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import junit.framework.Assert;


public class drop_down
{

	public static void main(String[] args) throws InterruptedException 
	{
   
		WebDriver driver = new ChromeDriver();
		Thread.sleep(2000);
		driver.manage().window().maximize();
																																								
		
		driver.get("https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html");		
		Thread.sleep(2000);

		WebElement dropdown = driver.findElement(By.id("course"));
		Thread.sleep(2000);

	   Select abc = new Select(dropdown);
		Thread.sleep(2000);

	   //abc.selectByIndex(2);
		abc.selectByIndex(1);
		Thread.sleep(2000);
		
		  WebElement selectedOption = abc.getFirstSelectedOption();
		String selectedText = selectedOption.getText();
String str = "Java";
		// Correct assertion
        Assert.assertEquals(selectedText,str, "Dropdown selection does not match");

	driver.close();
	  
	}

}
