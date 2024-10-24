import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();

        String[] numbers = sc.nextLine().split(" ");
        int count = 0;

        for(int i = 0; i<n; i++) {
            int number = Integer.parseInt(numbers[i]);
            if(isPrime(number)) {
                count++;
            }
        }

        System.out.println(count);

        sc.close();
    }

    public static boolean isPrime(int number) {
        if(number < 2) {
            return false;
        }
        for(int i = 2; i<=Math.sqrt(number); i++) {
            if(number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
