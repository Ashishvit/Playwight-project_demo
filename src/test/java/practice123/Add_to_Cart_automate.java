package practice123;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.Arrays;
import java.util.List;
public class Add_to_Cart_automate
{
    public static void main(String args[]) {
        // https://rahulshettyacademy.com/seleniumPractise/#/
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        String[] items = {"Cucumber", "Brocolli", "Beetroot"};
        driver.get("https://rahulshettyacademy.com/seleniumPractise/#/");

        List<WebElement> products = driver.findElements(By.xpath("//button[text()=\"ADD TO CART\"]"));

        for (int i = 0; i < products.size(); i++)
        {
          //brocolli -1 kg
            // brocolli 1 kg
            String[] name=products.get(i).getText().split("-");

            String formattedName = name[0].trim();

//format it to get actual vegetable name
//convert array into array list for easy search
//  check whether name you extracted is present in arrayList or not-

            List itemsNeededList = Arrays.asList(items);

        if(itemsNeededList.contains(formattedName))
            {
                driver.findElements(By.xpath("//div[@class='product-action']/button")).get(i).click();
            }


        }
    }
    }
