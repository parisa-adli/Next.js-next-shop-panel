import CardsWrapper from "@/components/CartWrapper";
import { useGetPayments } from "@/hooks/usePayments";
import { Suspense } from "react";

async function Admin() {
  return (
    <div>
      <Suspense fallback={<p>loading</p>}>
        <CardsWrapper />
      </Suspense>
    </div>
  );
}
export default Admin;
