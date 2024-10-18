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
        
        for (int i = 1; i < m - 2*n+1; i++) {
            if (s[i - 1] == 'I') {
                boolean flag = true;
                for (int k = 0; k < n; k++) {
                    if(s[i+k*2] == 'O' && s[i+k*2+1] == 'I') {
                        continue;
                    } else {
                        flag = false;
                        break;
                    }
                }
                if(flag) cnt += 1;
            }
        }
        bw.write(cnt + "\n");
        bw.flush();
        bw.close();
    }
}
