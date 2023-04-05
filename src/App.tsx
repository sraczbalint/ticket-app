import React from "react";
import { BagContainer } from "containers/BagContainer";
import { ConfirmationContainer } from "containers/ConfirmationContainer";
import { DetailsContainer } from "containers/DetailsContainer";
import { TicketContainer } from "containers/TicketContainer";
import { useSelector } from "react-redux";
import { RootState } from "store";
import WizardLayout from "templates/WizardLayout";

function App() {
  const page = useSelector((state: RootState) => state.page.current);
  return (
    <div className="">
      <WizardLayout>
        {page === "Jegyek kiválasztása" && <TicketContainer />}
        {page === "Kosár" && <BagContainer />}
        {page === "Fizetési adatok" && <DetailsContainer />}
        {page === "Jegyek küldése" && <ConfirmationContainer />}
      </WizardLayout>
    </div>
  );
}

export default App;
