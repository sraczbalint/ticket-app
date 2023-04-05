import React from "react";
import { BagContainer } from "containers/BagContainer";
import { ConfirmationContainer } from "containers/ConfirmationContainer";
import { DetailsContainer } from "containers/DetailsContainer";
import { TicketContainer } from "containers/TicketContainer";

import WizardLayout from "templates/WizardLayout";

function App() {
  return (
    <div className="">
      <WizardLayout>
        <ConfirmationContainer />
        <DetailsContainer />
        <BagContainer />
        <TicketContainer />
      </WizardLayout>
    </div>
  );
}

export default App;
