import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        int cnt = 0;

        while (n >= 0) {
            if(n == 0 || n % 5 == 0) {
                cnt += n/5;
                break;
            } else {
                n -= 3;
                cnt += 1;
            }
            if(n < 0) {
                cnt = -1;
            }
        }
        bw.write(cnt + "\n");
        bw.flush();
        bw.close();
    }
}
