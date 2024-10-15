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

        int num = 666;
        int count = 1;

        while(count != n) {
            num += 1;
            if(String.valueOf(num).contains("666")) {
                count += 1;
            }
        }
        bw.write(num + "\n");
        bw.flush();
        bw.close();
    }
}
