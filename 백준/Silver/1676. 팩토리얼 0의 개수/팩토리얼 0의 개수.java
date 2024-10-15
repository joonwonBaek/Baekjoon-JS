import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());

        BigInteger num = BigInteger.ONE;
        int count = 0;
        for(int i = 2; i<=n; i++) {
            num = num.multiply(BigInteger.valueOf(i));
        }
        String strNum = num.toString();
        
        for(int i = strNum.length() -1; i > -1; i--) {
            if(strNum.charAt(i) == '0') {
                count += 1;
            } else {
                break;
            }
        }
        bw.write(count + "\n");
        bw.flush();
        bw.close();
    }
}
