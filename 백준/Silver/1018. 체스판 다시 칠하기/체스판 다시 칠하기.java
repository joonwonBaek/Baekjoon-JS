import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;
import java.math.BigInteger;

public class Main {
    static int n;
    static int m;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        String [] chessboard = new String[n];

        for(int i = 0; i<n; i++) {
            chessboard[i] = br.readLine();
        }

        bw.write(count(chessboard) + "\n");
 
        bw.flush();
        bw.close();
    }

    public static int count(String[] arr) {
        int result = Integer.MAX_VALUE;

        for(int i = 0; i < n - 7; i++) {
            for(int j = 0; j < m - 7; j++) {
                for(int k = 0; k < 2; k++) {
                    char start = k == 0 ? 'W' : 'B';

                    int count = 0;
                    for(int n = i; n < i+8; n++) {
                        for(int m = j; m < j+8; m++) {
                            if(start != arr[n].charAt(m)) {
                                count += 1;
                            }
                            start = start == 'W' ? 'B' : 'W';
                        }
                        start = start == 'W' ? 'B' : 'W';
                    }
                    result = Math.min(result, count);

                    if(result == 0) {
                        return 0;
                    }
                }
            }
        }

        return result;
    }
}
