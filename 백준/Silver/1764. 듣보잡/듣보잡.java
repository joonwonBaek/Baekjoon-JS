import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        Set<String> set1 = new HashSet<>();
        Set<String> resultSet = new TreeSet<>();

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        for(int i = 0; i < n; i++) {
            String word = br.readLine();
            set1.add(word);
        }
        for(int i = 0; i < m; i++) {
            String word = br.readLine();
            if(set1.contains(word)) resultSet.add(word);

        }
        bw.write(resultSet.size() + "\n");
        for(String s: resultSet) {
            bw.write(s+"\n");
        }
        bw.flush();
        bw.close();
    }
}
