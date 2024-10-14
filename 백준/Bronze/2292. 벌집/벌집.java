import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bf.readLine());
        int current = 1;
        int count = 1;

        while(current < n) {
            current += count * 6;
            count += 1;
        }

        System.out.println(count);
    }
}
