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
            'Model S',
            'Model Y',
            'Model 3',
            'Model X',
            'Solar Panels',
            'Solar Roof',
            'Acessories',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
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
