const videos = ["apples", "pears", "banansa", "fruits"];
const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2k20", rating: 4 },
];

// videos.forEach(function (video) {
//   console.log("run");
//   console.log(video);
// });

// console.log(videos);

// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello There");
// }

// repeater(sayHello);

// //map
// const newVideos = videos.map(function (video) {
//   return video;
// });

//find
const searchTutorial = videos.find(function (video) {
  return video.includes("banansa");
});

//filter
const shortSearch = videos.filter(function (video) {
  return video.length < 7;
});

const highRatedGames = games.filter(function (game) {
  return game.rating > 9;
});

//some and every
const checkRating = games.every(function (game) {
  return game.rating > 8;
});

const someRating = games.some(function (game) {
  return game.rating > 8;
});

const newVideos = videos.map(function (video) {
  return video.length < 10 ? video : "nope";
});

const arrowVideo = videos.map((video) => (video.length < 10 ? video : "nope"));

//sort
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

//if return is negative, a is sorted before b
//if positive, b before a
//if 0, nothgin changes
// const filtered = ratings.sort((a, b) => a - b);

// console.log(ratings);

//spread
// const descRating = [...ratings];
// descRating.sort((a, b) => b - a);
// console.log(descRating);

// console.log(ratings);

const names = ["matt", "you"];
// const otherNames =
