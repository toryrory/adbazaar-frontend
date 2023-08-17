import styled from 'styled-components';
import {
  Typography,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from '@mui/material';

export const PanelText = styled(Typography)`
  color: var(--white-text);
  font-size: 16px;
`;

export const Summary = styled(AccordionSummary)`
  border-bottom: 0.3px solid var(--light-grey);
`;

export const AccordionBox = styled(Accordion)`
  // background-color: transparent;
`;

export const Details = styled(AccordionDetails)`
  border-top: 0.5px solid var(--brand-color);
  border-bottom: 0.5px solid var(--brand-color);
  background-color: #20252f;
  padding: 24px 16px 48px;
`;
