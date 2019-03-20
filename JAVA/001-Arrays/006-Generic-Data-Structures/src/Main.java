public class Main {

    public static void main(String[] args) {
        // 创建一个自定义的数组对象
        MyArray<Integer> ma = new MyArray<Integer>(20);
        for (int i = 1; i <= 10 ; i++) {
            ma.add(i);
        }

        /*
        * Array: size = 10，capacity = 20
        * [1,2,3,4,5,6,7,8,9,10]
        */
        System.out.println(ma);


        ma.insert(1, 200);

        /*
         * Array: size = 11，capacity = 20
         * [1,200,2,3,4,5,6,7,8,9,10]
         */
        System.out.println(ma);

        ma.addFirst(-1);
        /*
         * Array: size = 12，capacity = 20
         * [-1,1,200,2,3,4,5,6,7,8,9,10]
         */
        System.out.println(ma);

        ma.addLast(9999);
        /*
         * Array: size = 13，capacity = 20
         * [-1,1,200,2,3,4,5,6,7,8,9,10,9999]
         */
        System.out.println(ma);

        ma.set(5, 8888);
        /*
         * 8888
         */
        System.out.println(ma.get(5));

        /*
         * Array: size = 13，capacity = 20
         * [-1,1,200,2,3,8888,5,6,7,8,9,10,9999]
         * true
         * 6
         */
        System.out.println(ma);
        System.out.println(ma.contain(5));
        System.out.println(ma.find(5));

        ma.remove(ma.find(5));
        /*
         * Array: size = 12，capacity = 20
         * [-1,1,200,2,3,8888,6,7,8,9,10,9999]
         */
        System.out.println(ma);

        /*
         * -1
         * 9999
         * Array: size = 10，capacity = 20
         * [1,200,2,3,8888,6,7,8,9,10]
         */
        System.out.println(ma.removeFirst());
        System.out.println(ma.removeLast());
        System.out.println(ma);

        ma.removeElement(8888);
        /*
         * Array: size = 9，capacity = 20
         * [1,200,2,3,6,7,8,9,10]
         */
        System.out.println(ma);

        ma.add(123456);
        ma.add(123456);
        ma.add(123456);
        /*
         * Array: size = 3，capacity = 20
         * [9,10,11]
         * Array: size = 12，capacity = 20
         * [1,200,2,3,6,7,8,9,10,123456,123456,123456]
         */
        System.out.println(ma.findAll(123456));
        System.out.println(ma);

        ma.removeAllElement(123456);
        /*
         * Array: size = 9，capacity = 20
         * [1,200,2,3,6,7,8,9,10]
         */
        System.out.println(ma);
    }
}
