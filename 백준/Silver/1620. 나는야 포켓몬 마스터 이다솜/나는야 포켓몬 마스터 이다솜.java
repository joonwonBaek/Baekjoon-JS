import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        String []arr = new String[n];
        HashMap<String, Integer> mp = new HashMap<>();
        for(int i = 0; i<n; i++) {
            arr[i] = br.readLine();
            mp.put(arr[i], i+1);
        }
        for(int i = 0; i < m; i++) {
            String s = br.readLine();

            if(Character.isDigit(s.charAt(0))) {
                int temp = Integer.parseInt(s);
                bw.write(arr[temp-1] + "\n");
            } else {
                bw.write(mp.get(s) + "\n");
            }
        }
        
        bw.flush();
        bw.close();
    }
}
