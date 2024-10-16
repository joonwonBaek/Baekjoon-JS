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
        int[] dp = new int[11];

        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;
        for(int i = 4; i<11; i++) {
            dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
        }
        
        int t  = Integer.parseInt(br.readLine());
        for(int i = 0; i<t; i++){
            int temp = Integer.parseInt(br.readLine());
            bw.write(dp[temp] + "\n");
        }

        bw.flush();
        bw.close();
    }
}
