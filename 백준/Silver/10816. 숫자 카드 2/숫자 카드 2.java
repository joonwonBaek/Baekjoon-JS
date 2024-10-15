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
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        int []arr1 = new int[n];
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < n; i++) {
            arr1[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(arr1);

        int m = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < m; i++) {
            int number = Integer.parseInt(st.nextToken());
            int temp = findLastIndex(arr1, number) - findStartIndex(arr1, number);
            bw.write(temp + " ");
        }
        bw.write("\n");
        bw.flush();
        bw.close();
    }

    private static int findStartIndex(int[] arr, int value) {
        int left = 0;
        int right = arr.length;
        while(left < right) {
            int middle = (left + right) /2;
            if(value <= arr[middle]) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }
        return left;
    }

    private static int findLastIndex(int[] arr, int value) {
        int left = 0;
        int right = arr.length;
        while(left < right) {
            int middle = (left + right) / 2;
            if(value < arr[middle]) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }

        return left;
    }
}
