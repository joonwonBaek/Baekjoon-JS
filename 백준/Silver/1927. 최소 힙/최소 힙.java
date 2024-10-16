import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        int n = Integer.parseInt(br.readLine());

        for(int i = 0; i<n; i++) {
            int number = Integer.parseInt(br.readLine());
            if(number == 0) {
                if(minHeap.isEmpty()) {
                    bw.write(0 + "\n");
                } else {
                    int temp = minHeap.poll();
                    bw.write(temp + "\n");
                }
            } else {
                minHeap.add(number);
            }
        }
        bw.flush();
        bw.close();
    }
}
