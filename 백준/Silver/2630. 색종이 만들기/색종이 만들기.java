import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    static int graph[][];
    static int white = 0;
    static int blue = 0;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;

        int n = Integer.parseInt(br.readLine());
        graph = new int[n][n];
        for(int i = 0; i<n; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j<n; j++) {
                int temp = Integer.parseInt(st.nextToken());
                graph[i][j] = temp;
            }
        }

        partition(0, 0, n);
        bw.write(white + "\n");
        bw.write(blue + "\n");
        bw.flush();
        bw.close();
    }

    public static void partition(int row, int col, int size) {
        if(colorCheck(row, col, size)) {
            if(graph[row][col] == 0) {
                white += 1;
            } else {
                blue += 1;
            }
            return;
        }

        int newSize = size / 2;

        partition(row, col, newSize);
        partition(row, col+newSize, newSize);
        partition(row+newSize, col, newSize);
        partition(row+newSize, col+newSize, newSize);
    }

    public static boolean colorCheck(int row, int col, int size) {
        int color = graph[row][col];

        for(int i = row; i < row + size; i++) {
            for(int j = col; j < col + size; j++) {
                if(graph[i][j] != color) {
                    return false;
                }
            }
        }
        return true;
    }
}
