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
        int[] scores = new int[n];
        int[] stairs = new int[n];
        for(int i = 0; i<n; i++) {
            int number = Integer.parseInt(br.readLine());
            scores[i] = number;
        }
        if(n == 1) {
            stairs[0] = scores[0];
        } else if(n== 2) {
            stairs[0] = scores[0];
            stairs[1] = stairs[0] + scores[1];
        } else {
            stairs[0] = scores[0];
            stairs[1] = stairs[0] + scores[1];
            stairs[2] = Math.max(scores[0], scores[1]) + scores[2]; 
            for(int k = 3; k < n; k++) {
                stairs[k] = Math.max(stairs[k-3] + scores[k-1] + scores[k], stairs[k-2] + scores[k]);
            }
        }
        bw.write(stairs[n-1] + "\n");
        bw.flush();
        bw.close();
    }
}
