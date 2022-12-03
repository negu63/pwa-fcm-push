import { useState, useEffect } from "react";
import { requestForToken, onMessageListener } from "./firebase";

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  useEffect(() => {
    console.log(notification);
    if (notification?.title) {
      alert("title: " + notification?.title + "\nbody: " + notification?.body);
    }
  }, [notification]);

  requestForToken();

  onMessageListener()
    .then((payload) => {
      console.log("onMessage");
      setNotification({
        title: payload?.notification?.title!,
        body: payload?.notification?.body!,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return <div>{notification?.title}</div>;
};

export default Notification;
