import { Stack } from "@/structure/stack";

describe('Stack Specifications', function () {
    test('Basic Functionality Test', () => {
        let stack: Stack<number> = new Stack<number>();
        stack.push(4);
        stack.push(8);
        stack.push(12);
        expect(stack.toString()).toBe("[12, 8, 4]");

        let browserHistory: Stack<string> = new Stack<string>();
        browserHistory.push("https://duckduckgo.com/?t=ffab&q=x86+asm+debugger&ia=web");
        browserHistory.push("https://www.reddit.com/r/javascript/comments/9ekids/browserbased_x86_assembly_emulator_and_debugger/");
        browserHistory.push("https://kobzol.github.io/davis/");
        expect(browserHistory.pop()).toBe("https://kobzol.github.io/davis/");
        expect(browserHistory.peek()).toBe("https://www.reddit.com/r/javascript/comments/9ekids/browserbased_x86_assembly_emulator_and_debugger/");
        expect(browserHistory.pop()).toBe("https://www.reddit.com/r/javascript/comments/9ekids/browserbased_x86_assembly_emulator_and_debugger/");
        expect(browserHistory.peek()).toBe("https://duckduckgo.com/?t=ffab&q=x86+asm+debugger&ia=web");
    });
});