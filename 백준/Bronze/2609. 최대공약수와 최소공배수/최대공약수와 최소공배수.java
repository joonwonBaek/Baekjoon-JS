import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        // 2609
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        int gcdNum = gcd(n, m);
        int lcmNum = n*m / gcdNum;

        bw.write(gcdNum+ "\n" + lcmNum + "\n");
        bw.flush();
        bw.close();
    }

    static int gcd(int a, int b) {
        if(b == 0) return a;
        return gcd(b, a%b);
    }
}
