// console.log("Start");

// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("we now have the data");
//       resolve({ usernemail: email });
//     }, 3000);
//   });
// }

// function getUserVideos(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["video1", "video2", "video3"]);
//     }, 2000);
//   });
// }

// function videoDetails(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("title of the video");
//     }, 2000);
//   });
// }

// // const user = loginUser("mwiese@gmail", 123456, (user) => {
// //   console.log(user);
// //   getUserVideos(user.usernemail, (videos) => {
// //     console.log(videos);
// //     videoDetails(videos[0], (title) => {
// //       console.log(title);
// //     });
// //   });
// // });

// // loginUser("matt", "adsfsadf")
// //   .then((user) => getUserVideos(user.email))
// //   .then((videos) => videoDetails(videos[0]))
// //   .then((detail) => console.log(detail));

// // sync
// async function displayUser() {
//   try {
//     const loggedUser = await loginUser("matt", "afdasd");
//     const videos = await getUserVideos(loggedUser.userEmail);
//     const detail = await videoDetails(videos[0]);
//     console.log(detail);
//   } catch (err) {
//     console.log("error blah");
//   }
// }

// displayUser();

// console.log("Finish");

const button = document.querySelector("button");
const header = document.querySelector("h1");

// https://api.adviceslip.com/advice
button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => {
      header.innerText = data.slip.advice;
    });
});
