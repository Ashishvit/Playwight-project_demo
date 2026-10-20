package TestNG2.Parallel_Testing;

import org.testng.annotations.Test;

public class threadcount {


        @Test
        public void test1() {
            System.out.println("Test 1: Login");
        }

        @Test
        public void test2() {
            System.out.println("Test 2: Search");
        }

        @Test
        public void test3() {
            System.out.println("Test 3: Add to Cart");
        }

        @Test
        public void test4() {
            System.out.println("Test 4: Payment");
        }

        @Test
        public void test5() {
            System.out.println("Test 5: Logout");
        }

        @Test
        public void test6() {
            System.out.println("Test 6: Registration");
        }
    }

