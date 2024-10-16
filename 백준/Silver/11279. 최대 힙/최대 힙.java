import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        int n = Integer.parseInt(br.readLine());
        for(int i = 0; i<n; i++) {
            int number = Integer.parseInt(br.readLine());
            if(number == 0) {
                if(maxHeap.isEmpty()) {
                    bw.write(0 + "\n");
                } else {
                    bw.write(maxHeap.poll() + "\n");
                }
            } else {
                maxHeap.add(number);
            }
        }
        bw.flush();
        bw.close();
    }

}
