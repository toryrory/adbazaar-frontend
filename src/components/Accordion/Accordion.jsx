import { ExpandMore } from '@mui/icons-material';
import {
  PanelText,
  Summary,
  AccordionBox,
  Details,
  NotificationCounter,
  IconBox,
} from "./Accordion.styled";
import { useSelector } from 'react-redux';
import { selectNotifications } from '@/redux/selectors';

export default function AccountAccordion({ icon, text, children }) {
  const notifications = useSelector(selectNotifications);

  return (
    <>
      <AccordionBox sx={{ backgroundColor: 'var(--main-background)' }}>
        <Summary
          id="panel-info"
          aria-controls="panel-content"
          expandIcon={<ExpandMore htmlColor="#FFF" />}
        >
          <IconBox>
            {text === 'Notifications' && notifications.length > 0 && <NotificationCounter>{notifications.length}</NotificationCounter>}
        {icon}</IconBox>
          <PanelText>{text}</PanelText>
        </Summary>
        <Details>{children}</Details>
      </AccordionBox>
    </>
  );
}
