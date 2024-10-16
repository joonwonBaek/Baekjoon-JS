import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    static int dirX[] = {0,0, -1, 1};
    static int dirY[] = {1,-1, 0,0 };
    static int graph[][];
    static boolean visited[][];

    static int n;
    static int m;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;

        int tc = Integer.parseInt(br.readLine());
        for(int t = 0; t<tc; t++) {
            st = new StringTokenizer(br.readLine());

            m = Integer.parseInt(st.nextToken());
            n = Integer.parseInt(st.nextToken());
            int k = Integer.parseInt(st.nextToken());

            graph = new int[n][m];
            visited = new boolean[n][m];

            for(int i = 0; i<k; i++) {
                st = new StringTokenizer(br.readLine());
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                graph[b][a] = 1;
            }
            int count = 0;
            for(int x = 0; x < n; x++) {
                for(int y = 0; y<m; y++) {
                    if(graph[x][y] == 1 && !visited[x][y]) {
                        count += 1;
                        dfs(x, y);
                    }
                }
            }
            bw.write(count + "\n");
        }
        bw.flush();
        bw.close();
    }

    public static void dfs(int x, int y) {
        visited[x][y] = true;
        for(int i = 0; i<4; i++) {
            int nx = x + dirX[i];
            int ny = y + dirY[i];

            if(nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && graph[nx][ny] == 1) {
                dfs(nx, ny);
            }
        }
    }
}
