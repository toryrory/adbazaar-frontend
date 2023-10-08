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
  padding: 0;
`;

export const NotificationCounter = styled.div`
position: absolute;
left: 12px;
top: -3px;
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  background-color: var(--brand-color);
  color: var(--black);
  text-align: center;
  font-size: 9px;
  border-radius: 50%;
`;
export const IconBox = styled.div`
display: flex;
position: relative;
`;