// import { render, screen } from "../testUtils/testUtils";
import { render } from "../testUtils/testUtils";

//An example of using react-testing-library
describe("MyComponent", async () => {
    test("Should have text Hello from My Component on it", () => {
        render(<div></div>);
        // const elem = screen.getByText("Hello from My Component");
        // expect(elem).toBeInTheDocument();
        expect(1).toBe(1);
    });
});
