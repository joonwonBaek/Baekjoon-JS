import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(br.readLine());
        for(int tc = 0; tc<t; tc++) {
            int n = Integer.parseInt(br.readLine());
            Map<String, Integer> map = new HashMap<>();
            for(int i = 0; i<n; i++) {
                String[] words = br.readLine().split(" ");
                map.put(words[1], map.getOrDefault(words[1], 0) + 1);
            }

            int ans = 1;
            for(int val: map.values()) {
                ans *= val + 1;
            }
            bw.write(ans-1 + "\n");
        }
        
        bw.flush();
        bw.close();
    }
}
