public class Main {

    public static void main(String[] args) {
	// write your code here
        MyArray ma = new MyArray(20);
        for (int i = 1; i <= 10 ; i++) {
            ma.add(i);
        }
        System.out.println(ma);

        ma.insert(1, 200);
        System.out.println(ma);

        ma.addFirst(-1);
        System.out.println(ma);

        ma.addLast(9999);
        System.out.println(ma);

        ma.set(5, 8888);
        System.out.println(ma.get(5));
    }
}
