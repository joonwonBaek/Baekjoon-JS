import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        while(true) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            if(a==0 && b==0 && c==0) {
                break;
            }

            int[] arr = {a, b ,c};
            Arrays.sort(arr);

            if(Math.pow(arr[0], 2) + Math.pow(arr[1], 2) == Math.pow(arr[2], 2)) {
                System.out.println("right");
            } else {
                System.out.println("wrong");
            }
        }
        sc.close();
    }
}
