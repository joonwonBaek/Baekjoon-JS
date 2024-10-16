import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;
        TreeSet<Integer> treeSet = new TreeSet<>();
        Map<Integer, Integer> mp = new HashMap<>();
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        int []arr = new int[n];
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < n; i++) {
            int temp = Integer.parseInt(st.nextToken());
            arr[i] = temp;
            treeSet.add(temp);
        }
        int idx = 0;
        for(int t: treeSet) {
            mp.put(t, idx);
            idx += 1;
        }
        for(int i = 0; i<n; i++) {
            int temp = mp.get(arr[i]);
            sb.append(temp + " ");
        }
        bw.write(sb + "\n");
        bw.flush();
        bw.close();
    }

}
