import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    static int count;
    static boolean[] visited;
    static List<Integer>[] computers;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        int []dp = new int[n];
        if(n == 1) {
            bw.write((1%10007)+"\n");
        } else if(n == 2) {
            bw.write((3%10007)+ "\n");
        } else {
            dp[0] = 1;
            dp[1] = 3;
            for(int i = 2; i<n; i++) {
                dp[i] = (dp[i-1] + dp[i-2] * 2)%10007;
            }
            bw.write(dp[n-1] + "\n");
        }
        bw.flush();
        bw.close();
    }
}
