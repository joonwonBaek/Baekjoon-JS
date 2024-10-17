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
        int []dp = new int[n+1];

        dp[0] = 0;
        dp[1] = 1;

        for(int i = 2; i<=n; i++) {
            dp[i] = dp[i-1];
            for(int j = 1; j*j <= i; j++) {
                dp[i] = Math.min(dp[i-j*j], dp[i]);
            }

            dp[i] += 1;
        }
        bw.write(dp[n] + "\n");
        bw.flush();
        bw.close();
    }

}
