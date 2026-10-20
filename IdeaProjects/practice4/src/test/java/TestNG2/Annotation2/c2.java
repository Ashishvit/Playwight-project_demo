package TestNG2.Annotation2;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class c2 {

   // public class C2 {

        @Test
        void xyz()
        {
            System.out.println(" this is xyz from C2..");
        }

        @AfterTest
        void at()
        {
            System.out.println("this is AfterTest method....");
        }

    }


