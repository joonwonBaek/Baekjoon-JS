import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;

        int tc = Integer.parseInt(br.readLine());
        for(int t = 0; t < tc; t++) {
            st = new StringTokenizer(br.readLine());
            int answer = -1;
            int m = Integer.parseInt(st.nextToken());
            int n = Integer.parseInt(st.nextToken());
            int x = Integer.parseInt(st.nextToken()) -1;
            int y = Integer.parseInt(st.nextToken()) -1;

            for(int i = x; i<=m*n; i+=m) {
                if(i%n == y) {
                    answer = i+1;
                    break;
                }
            }
            bw.write(answer + "\n");
        }
        bw.flush();
        bw.close();
    }
}
