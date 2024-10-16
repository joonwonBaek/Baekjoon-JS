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
        StringTokenizer st;

        int n = Integer.parseInt(br.readLine());
        int m = Integer.parseInt(br.readLine());
        computers = new ArrayList[n+1];
        for(int i = 1; i<=n; i++) {
            computers[i] = new ArrayList<>();
        }
        visited = new boolean[n+1];
        for(int i = 0; i<m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            computers[a].add(b);
            computers[b].add(a);
        }

        bfs(1);
        bw.write(count+"\n");
        bw.flush();
        bw.close();
    }
    private static void bfs(int start) {
        Queue<Integer> q = new LinkedList<Integer>();
        q.add(start);
        visited[start] = true;
        while(!q.isEmpty()) {
            int now = q.poll();
            for(int next: computers[now]) {
                if(!visited[next]) {
                    visited[next] = true;
                    q.add(next);
                    count++;
                }
            }
        }
    }
}
