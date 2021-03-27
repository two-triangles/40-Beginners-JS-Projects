const reviews = [
  {
    id: 1,
    name: "Shawn Smith",
    job: "WITCH HUNTER",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZuT-Q8TxfM1jWM6ykC0YgsRF6zq5T8YzZg&usqp=CAU",
    text:
      "I'm heading back to Colorado tomorrow after being down in Santa Barbara over the weekend for the festival there. I will be making October plans once there and will try to arrange so I'm back here for the birthday if possible. I'll let you know as soon as I know the doctor's appointment schedule and my flight plans.",
  },
  {
    id: 2,
    name: "Wendy Wallyson",
    job: "BAGUETTER CARVER",
    img:
      "https://3.bp.blogspot.com/-0WNZzIvLXCQ/T4OYV9EYaGI/AAAAAAAAFBM/sEUZ59ENuOA/s1600/just%2Bamy025_pp_Snapseed%25231.jpg",
    text:
      "According to the caption on the bronze marker placed by the Multnomah Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.",
  },
  {
    id: 3,
    name: "Clive Andlivin",
    job: "WAFFLE THIEF",
    img:
      "https://rebrand.com/wp-content/uploads/2017/08/NanneBos-400px-Square-9-21-17-N.-BOS-by-Genevieve-Chasse-Portraits-HR-6-300x300.jpg",
    text:
      "There were little things that she simply could not stand. The sound of someone tapping their nails on the table. A person chewing with their mouth open. Another human imposing themselves into her space. She couldn't stand any of these things, but none of them compared to the number one thing she couldn't stand which topped all of them combined.",
  },
  {
    id: 4,
    name: "Nelly De Elevont",
    job: "TRUNK CLEANER",
    img: "https://farm66.static.flickr.com/65535/50821649716_51d6935c9a.jpg",
    text:
      "The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.",
  },
];

const img = document.getElementById("person_img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const randomBtn = document.querySelector(".random_btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function (event) {
  if (currentItem === reviews.length - 1) {
    event.preventDefault();
  } else {
    currentItem++;
    showPerson(currentItem);
    console.log(currentItem);
  }
});

prevBtn.addEventListener("click", function (event) {
  if (currentItem === 0) {
    event.preventDefault();
  } else {
    currentItem--;
    showPerson(currentItem);
    console.log(currentItem);
  }
});

randomBtn.addEventListener("click", (event) => {
  const randomNum = Math.floor(Math.random() * 4);
  showPerson(randomNum);
});
