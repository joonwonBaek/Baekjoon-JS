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
        StringBuilder sb = new StringBuilder();

        sb.append("<");

        Queue<Integer> q = new LinkedList<>();
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        for(int i = 1; i<=n; i++) {
            q.add(i);
        }

        while(q.size() > 1) {
            for(int i = 0; i<k-1; i++) {
                int temp = q.poll();
                q.add(temp);
            }
            int num = q.poll();
            sb.append(num).append(", ");
        }
        int num = q.poll();
        sb.append(num).append(">");
        bw.write(sb + "\n");
        bw.flush();
        bw.close();
    }
}
