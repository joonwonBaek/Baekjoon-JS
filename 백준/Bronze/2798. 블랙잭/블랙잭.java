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

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        int answer = 0;

        int[] numbers = new int[n];
        for (int i = 0; i < n; i++) {
            numbers[i] = Integer.parseInt(st.nextToken());
        }
        for(int i = 0; i< n-2; i++) {
            for(int j =i+1; j<n-1; j++) {
                for(int k =j+1; k<n; k++) {
                    if(numbers[i] + numbers[j] + numbers[k] > m) {
                        continue;
                    } else {
                        answer = Math.max(answer, numbers[i] + numbers[j] + numbers[k]);
                    }
                }
            }
        }
        bw.write(answer + "\n");
        bw.flush();
        bw.close();
    }
}
