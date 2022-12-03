importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD_2PdtwRjV5E-gqqLVqdttFA-ZAwDqdWU",
  projectId: "pwa-test-f9693",
  messagingSenderId: "861438469925",
  appId: "1:861438469925:web:70fc7297888f552a09dccc",
};

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  // const notificationTitle = payload.notificationtitle;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   icon: "/logo192.png",
  // };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});

