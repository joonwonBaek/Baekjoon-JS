import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String word = br.readLine();
        String[] oper = word.split("-");
        int answer = 0;
        for(int i = 0; i<oper.length; i++) {
            int sum = 0;
            String[] temp = oper[i].split("\\+");
            for(String t: temp) {
                sum += Integer.parseInt(t);
            }
            if(i == 0) answer += sum;
            else answer -= sum;
        }

        bw.write(answer + "\n");
        bw.flush();
        bw.close();
    }
}
