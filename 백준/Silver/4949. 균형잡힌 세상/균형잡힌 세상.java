import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        while(true) {
            String str = br.readLine();
            if(str.equals(".")) {
                break;
            }
            Stack<String> stack = new Stack<>();

            String[] sentence = str.split("");
            for (String word : sentence) {
                if (word.equals("(") || word.equals("[")) {
                    stack.push(word);
                } else {
                    if (word.equals(")")) {
                        if (!stack.isEmpty() && stack.peek().equals("(")) {
                            stack.pop();
                        } else {
                            stack.push(word);
                        }
                    }
                    if (word.equals("]")) {
                        if (!stack.isEmpty() && stack.peek().equals("[")) {
                            stack.pop();
                        } else {
                            stack.push(word);
                        }
                    }
                }
            }
            if(stack.isEmpty()) {
                bw.write("yes\n");
            } else {
                bw.write("no\n");
            }
            bw.flush();
        }
    }
}
