import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        int result = factorial(n) / (factorial(n-k) * factorial(k));
        bw.write(result + "\n");
        bw.flush();
        bw.close();
    }
    static int factorial(int num) {
        int result = 1;
        for(int i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
