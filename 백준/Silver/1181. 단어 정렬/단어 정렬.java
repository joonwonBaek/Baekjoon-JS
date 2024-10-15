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
        String list[] = new String[n];
        for(int i = 0; i < n; i++) {
            list[i] = br.readLine();
        }
        list = Arrays.stream(list).distinct().toArray(String[]::new);

        Arrays.sort(list, new Comparator<String>(){
            @Override
            public int compare(String o1, String o2) {
                if(o1.length() == o2.length()) {
                    return o1.compareTo(o2);
                } else {
                    return o1.length() - o2.length();
                }
            }
        });

        for(String a: list) {
            bw.write(a + "\n");
        }
        bw.flush();
        bw.close();
    }
}
