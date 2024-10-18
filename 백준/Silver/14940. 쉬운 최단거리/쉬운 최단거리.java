import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    static int graph[][];
    static int n;
    static int m;
    static int visited[][];
    static int dirX[] = {1, -1, 0, 0};
    static int dirY[] = {0, 0, 1, -1};
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        graph = new int[n][m];
        visited = new int[n][m];
        for(int i = 0; i < n; i++) {
            Arrays.fill(visited[i], -1);
        }
        int start[] = new int[2];
        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < m; j++){
                int number = Integer.parseInt(st.nextToken());
                if(number == 2) {
                    start[0] = i;
                    start[1] = j;
                }
                if(number == 0) {
                    visited[i][j] = 0;
                }
                graph[i][j] = number;
            }
        }

        bfs(start[0], start[1]);
        for(int i = 0; i<n; i++) {
            for(int j = 0; j<m; j++) {
                bw.write(visited[i][j] + " ");
            }
            bw.write("\n");
        }
        bw.flush();
        bw.close();
    }
    private static void bfs(int x, int y) {
        Queue<int[]> q = new LinkedList<>();
        visited[x][y] = 0;
        q.add(new int[] {x, y});

        while(!q.isEmpty()) {
            int[] current = q.poll();
            int dx = current[0];
            int dy = current[1];
            for(int i = 0; i < 4; i++) {
                int nx = dx + dirX[i];
                int ny = dy + dirY[i];
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] == -1 && graph[nx][ny] == 1) {
                    visited[nx][ny] = visited[dx][dy] + 1;
                    q.add(new int[] {nx, ny});
                }
            }
        }
        
    }
}
