import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    static int graph[][];
    static int n;
    static int m;
    static int dirX[] = {1, -1, 0, 0};
    static int dirY[] = {0, 0, 1, -1};

    static Queue<int[]> q = new LinkedList<>();
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        m = Integer.parseInt(st.nextToken());
        n = Integer.parseInt(st.nextToken());
        graph = new int[n][m];

        int start[] = new int[2];
        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < m; j++){
                int number = Integer.parseInt(st.nextToken());
                graph[i][j] = number;
                if(number == 1) {
                    q.add(new int[] {i,j});
                }
            }
        }

        bw.write(bfs() + "\n");
        bw.flush();
        bw.close();
    }
    private static int bfs() {
        while(!q.isEmpty()) {
            int[] current = q.poll();
            int dx = current[0];
            int dy = current[1];
            for(int i = 0; i < 4; i++) {
                int nx = dx + dirX[i];
                int ny = dy + dirY[i];
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] == 0) {
                    graph[nx][ny] = graph[dx][dy] + 1;
                    q.add(new int[] {nx, ny});
                }
            }
        }
        int max = Integer.MIN_VALUE;
        if(!checkTomato()) {
            return -1;
        } else {
            for(int i = 0; i<n; i++){
                for(int j = 0; j<m; j++) {
                    if(max < graph[i][j]) {
                        max = graph[i][j];
                    }
                }
            }
            return max -1;
        }
        
    }
    static boolean checkTomato() {
        for(int i = 0; i<n ;i++) {
            for(int j =0; j<m; j++) {
                if(graph[i][j] == 0) {
                    return false;
                }
            }
        }
        return true;
    }
}
