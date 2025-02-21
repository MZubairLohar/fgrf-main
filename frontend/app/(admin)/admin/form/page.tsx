import UpdateForm from "@/components/newUi/dashboard/components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fazain Global Relief Foundation UK",
  description: "This is Admin Dashboard Page",
  // other metadata
};

export default function Home() {
  return (
    <>
      <UpdateForm />
    </>
  );
}
