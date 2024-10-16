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
            Queue<int[]> q = new LinkedList<int[]>();
            st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());
            int m = Integer.parseInt(st.nextToken());
            st = new StringTokenizer(br.readLine());
            for(int i = 0; i<n; i++) {
                int num = Integer.parseInt(st.nextToken());
                q.add(new int[] {i, num});
            }
            int cnt = 0;
            while(true) {
                int[] current = q.poll();
                boolean flag = true;

                for(int[] curQ: q) {
                    if(curQ[1] > current[1]) {
                        flag = false;
                        break;
                    }
                }
                if(flag) {
                    cnt += 1;
                    if(current[0] == m) break;
                } else {
                    q.add(current);
                }
            }
            bw.write(cnt + "\n");
        }
        
        bw.flush();
        bw.close();
    }
}
