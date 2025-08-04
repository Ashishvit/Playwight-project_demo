package practice123;

import org.testng.Assert;
import org.testng.annotations.Test;

public class demotest
{

    // Test 1: Simple test with assertion
    @Test
    public void testLogin() {
        String expectedTitle = "Dashboard";
        String actualTitle = "Dashboard";
        Assert.assertEquals(actualTitle, expectedTitle, "Login test failed!");
        System.out.println("testLogin passed");
    }

    // Test 2: Test with priority
    @Test(priority = 1)
    public void testSearchProduct() {
        System.out.println("testSearchProduct executed");
    }

    // Test 3: Test belonging to a group
    @Test(groups = {"regression"})
    public void testAddToCart() {
        System.out.println("testAddToCart executed in regression group");
    }

    // Test 4: Test that depends on another test
    @Test(dependsOnMethods = {"testLogin"})
    public void testLogout() {
        System.out.println("testLogout executed after testLogin");
    }
}
