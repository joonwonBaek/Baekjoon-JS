import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    static int graph[][];
    static int n;
    // 1389
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        graph = new int[n+1][n+1];

        for(int i = 0; i<m; i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            graph[a][b] = 1;
            graph[b][a] = 1;
        }

        int minBacon = Integer.MAX_VALUE;
        int person = -1;
        for(int i = 1; i<=n; i++) {
            int temp = find(i);
            if(temp < minBacon) {
                minBacon = temp;
                person = i;
            }
        }
        bw.write(person + "\n");
        bw.flush();
        bw.close();
    }
    private static int find(int start) {
        Queue<Integer> q = new LinkedList<>();
        int []visited = new int[n+1];
        Arrays.fill(visited, -1);
        visited[start] = 0;
        q.add(start);

        while(!q.isEmpty()) {
            int now = q.poll();
            for(int i = 1; i <= n; i++) {
                if(visited[i] == -1 && graph[now][i] == 1) {
                    visited[i] = visited[now] + 1;
                    q.add(i);
                }
            } 
        }
        return Arrays.stream(visited).sum();
    }
}
