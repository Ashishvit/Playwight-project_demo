package practice123;




import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.io.IOException;
public class xpath_axes1
{
   public static void main(String args[])
   {
	

    //xpath axes following sibling concept
    //header/div/button[1]/following-sibling::button[1]

WebDriver driver = new ChromeDriver();

driver.get("https://rahulshettyacademy.com/AutomationPractice/");

String str = driver.findElement(By.xpath("//header/div/button[1]/following-sibling::button[1]")).getText();


System.out.println("text of web page is   "+str);


// trverse from child to parent element 

//
   }
}



	
	
	
	
	
	
	
	
	
	
	


