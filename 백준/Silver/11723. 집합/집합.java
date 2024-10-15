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

        Set<Integer> set = new HashSet<>();

        int n = Integer.parseInt(br.readLine());
        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            String oper = st.nextToken();
            if(oper.equals("all")) {
                set = new HashSet<>();
                for(int j = 1; j <= 20; j++) {
                    set.add(j);
                }
            } else if (oper.equals("empty")) {
                set.clear();
            } else {
                int number = Integer.parseInt(st.nextToken());
                if(oper.equals("add")) {
                    set.add(number);
                } else if(oper.equals("remove")) {
                    set.remove(number);
                } else if (oper.equals("check")) {
                    if(set.contains(number)) {
                        bw.write("1\n");
                    } else {
                        bw.write("0\n");
                    }
                } else if(oper.equals("toggle")) {
                    if(set.contains(number)) {
                        set.remove(number);
                    } else {
                        set.add(number);
                    }
                }
            }
        }
        bw.flush();
        bw.close();
    }
}
