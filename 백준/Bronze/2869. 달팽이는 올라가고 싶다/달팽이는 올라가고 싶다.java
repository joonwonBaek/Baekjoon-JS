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

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int v = Integer.parseInt(st.nextToken());

        int distance = v - b;
        int dayDist = a - b;
        int result = 0;
        
        if(distance % dayDist == 0) {
            result = distance / dayDist;
        } else {
            result = distance / dayDist + 1;
        }

        bw.write(result + "\n");
        bw.flush();
        bw.close();
    }
}
