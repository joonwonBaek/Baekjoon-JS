import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        int m = Integer.parseInt(br.readLine());
        char s[] = br.readLine().toCharArray();

        int cnt = 0;
        int patternCount = 0;
        int i = 1;

        while(i<m-1) {
            if(s[i -1] == 'I' && s[i] == 'O' && s[i+1] == 'I') {
                patternCount += 1;
                if(patternCount == n ) {
                    cnt += 1;
                    patternCount -= 1;
                }
                i += 2;
            } else {
                patternCount = 0;
                i++;
            }
        }
        bw.write(cnt + "\n");
        bw.flush();
        bw.close();
    }
}
