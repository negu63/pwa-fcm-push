import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  MessagePayload,
  onMessage,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD_2PdtwRjV5E-gqqLVqdttFA-ZAwDqdWU",
  projectId: "pwa-test-f9693",
  messagingSenderId: "861438469925",
  appId: "1:861438469925:web:70fc7297888f552a09dccc",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BDHG540Xx3HBu-Jn8rdAnZkyPRoSi7J-kyQ42WjRjZ5wkOXxPTIt_huKMsTN2K37M9pYpdldqK_lhT9zFveB5dE",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise<MessagePayload>((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
