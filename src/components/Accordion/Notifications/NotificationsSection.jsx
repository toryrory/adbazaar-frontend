import { Container, LoadMoreBtn } from "./NotificationsSection.styled";
import NotificationItem from "./NotificationItem/NotificationItem";
import NotificationsBtnsGroup from "./NotificationsBtnsGroup/NotificationsBtnsGroup";
import { useSelector } from "react-redux";
import { selectNotifications } from "@/redux/selectors";

export default function Notifications() {
  const notifications = useSelector(selectNotifications);

  return (
    <Container>
      {notifications.map(({ body, id, time, checked, isRead }) => {
        return (
          <NotificationItem
            key={id}
            id={id}
            time={time}
            checked={checked}
            isRead={isRead}
            data={body}
          />
        );
      })}
      {/* <LoadMoreBtn onClick={handleLoadMore}>
        <LoadMore style={{ width: "24px", height: "24px" }} />
        Load More
      </LoadMoreBtn> */}
      <NotificationsBtnsGroup
        group={"section-btns"}
      />
    </Container>
  );
}
