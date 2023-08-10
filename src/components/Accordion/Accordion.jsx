import { AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { PanelText, Summary, AccordionBox, Details } from "./Accordion.styled";

export default function AccountAccordion({ icon, text, children }) {
  return (
    <>
      <AccordionBox>
        <Summary
          id='panel-info'
          aria-controls='panel-content'
          expandIcon={<ExpandMore htmlColor='#FFF' />}
          
        >
          {icon}
          <PanelText>{text}</PanelText>
        </Summary>
        <Details>{children}</Details>
      </AccordionBox>
    </>
  );
}
