import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "../UniqueOverlay";

import { Container, Spacer } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            {modelName:'Model S', description: "Order Online for Touchless Delivery" },
            {modelName:'Model Y', description: "Order Online for Touchless Delivery"},
            {modelName:'Model 3', description: "Order Online for Touchless Delivery"},
            {modelName:'Model X', description: "Order Online for Touchless Delivery"},
            {modelName:'Lowest Cost Solar Panels in America', description: "Money-back guarantee"},
            {modelName:'Solar for New Roofs', description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels"},
            {modelName:'Acessories', description: ""},
          ].map(model => (
            <ModelSection
              key={model.modelName}
              className="colored"
              modelName={model.modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={model.modelName}
                  description={model.description}
                />
              }
            />
          ))}
        </div>

        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
