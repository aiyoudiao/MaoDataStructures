public class Main {

    public static void main(String[] args) {

        int[] arr = new int[50000];

        for (int i = 0; i < 50000 ; i++) {
            arr[i] = i + 1;
        }

//        System.out.println(Calc.sum(arr));
        System.out.println(Calc.tailSum(arr));

    }
}
