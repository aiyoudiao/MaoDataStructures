import java.util.Stack;

public class Solution {

    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        for (int i = 0; i < s.length(); i++) {

            char c = s.charAt(i);
            switch (c) {
                case '{':
                case '[':
                case '(':
                    stack.push(c);
                    break;
                default: break;
            }

            switch (c) {
                case '}':
                    if(stack.isEmpty() || stack.pop() != '{' ) {
                        System.out.println("valid error. not parentheses. in");
                        return false;
                    }
                    break;
                case ']':
                    if(stack.isEmpty() || stack.pop() != '[') {
                        System.out.println("valid error. not parentheses. in");
                        return false;
                    }
                    break;
                case ')':
                    if(stack.isEmpty() || stack.pop() != '(') {
                        System.out.println("valid error. not parentheses. in");
                        return false;
                    }
                    break;
                default: break;
            }
        }
        if (stack.isEmpty()) {
            System.out.println("valid success. parentheses.");
            return true;
        } else {
            System.out.println("valid error. not parentheses. out.");
            return false;
        }
    }
}


