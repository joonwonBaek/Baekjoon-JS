import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int t = Integer.parseInt(br.readLine());
        int[] cntZero = new int[41];
        int[] cntOne = new int[41];
        cntZero[0] = 1;
        cntOne[0] = 0;
        cntZero[1] = 0;
        cntOne[1] = 1;
        for(int i = 2; i <= 40; i++) {
            cntZero[i] = cntZero[i-1] + cntZero[i-2];
            cntOne[i] = cntOne[i-1] + cntOne[i-2];
        }
        for(int i = 0; i<t; i++) {
            int number = Integer.parseInt(br.readLine());
            bw.write(cntZero[number] + " " + cntOne[number] + "\n");
        }
        bw.flush();
        bw.close();
    }
}
