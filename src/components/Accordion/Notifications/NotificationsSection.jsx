import { Container, LoadMoreBtn } from "./NotificationsSection.styled";
import { useState } from "react";
import NotificationItem from "./NotificationItem/NotificationItem";
import NotificationsBtnsGroup from "./NotificationsBtnsGroup/NotificationsBtnsGroup";
import { useSelector } from "react-redux";
import { selectNotifications } from "@/redux/selectors";
import { LoadMore } from "../../../../public/svg-account";

export default function Notifications() {
  const notifications = useSelector(selectNotifications);
  const [page, setPage] = useState(1);

  // useEffect(() => { //перенести загрузку нотификейшенов после логина/ захода на индекс пейд
  // //  dispatch(getNotifications())
  // }, [])


  const handleLoadMore = () => {
    setPage(prevState => prevState += 1);
    //dispatch(getNotifications(page))
  }
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
      <LoadMoreBtn onClick={handleLoadMore}>
        <LoadMore style={{ width: "24px", height: "24px" }} />
        Load More
      </LoadMoreBtn>
      <NotificationsBtnsGroup
        group={"section-btns"}
      />
    </Container>
  );
}
