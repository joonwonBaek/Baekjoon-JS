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
        int[] numbers = new int[n];
        for(int i = 0; i < n; i++) {
            numbers[i] = Integer.parseInt(br.readLine());
        }
        bw.write(findAvg(numbers) + "\n");
        bw.write(findMiddle(numbers) + "\n");
        bw.write(findFrequence(numbers) + "\n");
        bw.write(findDiffer(numbers) + "\n");
        bw.flush();
        bw.close();
    }

    static int findAvg(int[] array) {
        double sum = 0;
        int avg = 0;

        for(int a: array) {
            sum += a;

        }
        avg = (int)Math.round(sum/array.length);
        return avg;
    }

    static int findMiddle(int[] array) {
        Arrays.sort(array);
        return array[(array.length)/2];
    }

    static int findFrequence(int[] array) {
        Map<Integer, Integer> mp = new HashMap<>();

        if(array.length == 1) {
            return array[0];
        }

        for(int i = 0; i < array.length; i++) {
            if(mp.containsKey(array[i])) {
                mp.put(array[i], mp.get(array[i]) + 1);
            } else {
                mp.put(array[i], 1);
            }
        }
        
        int maxValue = Collections.max(mp.values());
        
        ArrayList<Integer> arrayList = new ArrayList<>();

        for(Map.Entry<Integer, Integer> newMap: mp.entrySet()) {
            if(newMap.getValue() == maxValue) {
                arrayList.add(newMap.getKey());
            } 
        }

        Collections.sort(arrayList);

        if(arrayList.size() > 1) return arrayList.get(1);
        else return arrayList.get(0);


    }

    static int findDiffer(int[] array) {
        Arrays.sort(array);

        return Math.abs(array[array.length - 1] - array[0]);
    }
}
