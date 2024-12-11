/*{
  <div class="card">
        <h2>Naruto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dignissimos?
        </p>
        <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="" />
      </div> 
}*/

const appDiv = document.querySelector(".app");
function generateCard(title, description, imgUrl) {
const cardDiv = document.createElement("div");
cardDiv.className = "card"

const heading= document.createElement("h3");
heading.textContent = title;

const image = document.createElement("img");
image.src = imgUrl;

const paragraph = document.createElement("p");
paragraph.textContent = description;

cardDiv.appendChild(heading);
cardDiv.appendChild(paragraph);
cardDiv.appendChild(image);

appDiv.appendChild(cardDiv);}



generateCard(
  "Naruto",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
  "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
);