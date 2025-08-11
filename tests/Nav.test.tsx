// Nav.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import Nav from "../src/app/components/nav";
import { usePathname } from "next/navigation";

// Mock Next.js hooks
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// Create a typed mock
const mockUsePathname = jest.mocked(usePathname);

describe("Nav Component", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    // Set a default mock return value
    mockUsePathname.mockReturnValue("/");
  });

  it("should render correctly with /about pathname", () => {
    // Set the mock return value for this specific test
    mockUsePathname.mockReturnValue("/about");
    
    // Render the Nav component
    render(<Nav />);
    
    // Add assertions here to verify the component renders correctly
    // For example, you might check if certain styles are applied based on the pathname
    expect(mockUsePathname).toHaveBeenCalled();
  });

  it("renders after mount", async () => {
    // Render the Nav component
    render(<Nav />);

    // Wait for the component to mount and render
    await waitFor(() => expect(screen.getByRole("list")).toBeInTheDocument());

    // Check if the navigation items are rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});