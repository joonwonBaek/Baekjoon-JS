import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int [][] arr = new int[15][15];

        for(int i = 1; i< 15; i++) {
            arr[0][i] = i;
        }

        for (int x = 1; x < 15; x++) {
            for (int y = 1; y < 15; y++) {
                arr[x][y] = arr[x][y-1] + arr[x-1][y];
            }
        }

        int t = Integer.parseInt(br.readLine());

        for(int i = 0; i<t; i++) {
            int n = Integer.parseInt(br.readLine());
            int k = Integer.parseInt(br.readLine());
    
            bw.write(arr[n][k] + "\n");
        }
        bw.flush();
        bw.close();
    }
}
