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
        int k = Integer.parseInt(st.nextToken());
        int n = Integer.parseInt(st.nextToken());
        int []lines = new int[k];
        for(int i = 0; i<k; i++) {
            lines[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(lines);
        long left = 1;
        long right = lines[k-1];
        long answer = 0;

        while(left <= right) {
            long middle = (left + right) / 2;
            long temp = 0;

            for(long l: lines) {
                if(l >= middle) {
                    temp += l / middle;
                }
            }

            if(temp < n) {
                right = middle - 1;
            } else {
                answer = middle;
                left = middle + 1;
            }

        }
        bw.write(answer + "\n");
        bw.flush();
        bw.close();
    }
}
