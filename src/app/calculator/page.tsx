import { redirect } from "next/navigation";

// Direct all calculator traffic to the high-performance main page.
export default function CalculatorPage() {
  redirect("/");
}
