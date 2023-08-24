const URL = "https://api.pexels.com/v1/search?query=nature/";
const URL2 = "https://api.pexels.com/v1/search?query=god/";
const cardimgslot = document.querySelectorAll("rect");
const cardspace = document.getElementById("cardspace");

const createcard = function (apiURL, id) {
  const columnContainer = document.createElement("div");
  columnContainer.classList.add("col-md-4");
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  cardContainer.classList.add("mb-4");
  cardContainer.classList.add("shadow-sm");
  const imageElem = document.createElement("img");
  imageElem.classList.add("bd-placeholder-img");
  imageElem.classList.add("card-img-top");
  imageElem.setAttribute("src", apiURL);
  imageElem.setAttribute("height", "225");
  imageElem.setAttribute("width", "100%");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = "Lorem Ipsum";
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText =
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("d-flex");
  btnContainer.classList.add("justify-content-between");
  btnContainer.classList.add("align-items-center");
  const btnslot = document.createElement("div");
  btnslot.classList.add("btn-group");
  const viewbtn = document.createElement("button");
  viewbtn.classList.add("btn");
  viewbtn.classList.add("btn-sm");
  viewbtn.classList.add("btn-outline-secondary");
  viewbtn.innerText = "view";
  const hidebtn = document.createElement("button");
  hidebtn.classList.add("btn-sm");
  hidebtn.classList.add("btn");
  hidebtn.classList.add("btn-outline-secondary");
  hidebtn.setAttribute("onclick", "deletecard(event)");
  hidebtn.innerText = "hide";
  const cardFooter = document.createElement("small");
  cardFooter.classList.add("text-muted");
  cardFooter.innerText = id;
  btnslot.appendChild(viewbtn);
  btnslot.appendChild(hidebtn);
  btnContainer.appendChild(btnslot);
  btnContainer.appendChild(cardFooter);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(btnContainer);
  cardContainer.appendChild(imageElem);
  cardContainer.appendChild(cardBody);
  columnContainer.appendChild(cardContainer);
  cardspace.appendChild(columnContainer);
};

const deleteTemplate = function () {
  const targets = document.querySelectorAll(".col-md-4");
  targets.forEach(elem => elem.remove());
};

const deletecard = function (ev) {
  ev.target.closest(".col-md-4").remove();
};

async function load1btn() {
  try {
    const response = await fetch(URL, {
      headers: {
        authorization: "fpIAJvdFWK1TOq6PKvcgJPRNUOqZSpy7as2JcghAAxybv2Sr7rhUKdf5",
      },
    });
    const data = await response.json();
    console.log(data);
    deleteTemplate();
    data.photos.forEach(element => {
      createcard(element.src.medium, element.id);
    });
  } catch (error) {
    console.log(error);
  }
}

async function load2btn() {
  try {
    const response = await fetch(URL2, {
      headers: {
        authorization: "fpIAJvdFWK1TOq6PKvcgJPRNUOqZSpy7as2JcghAAxybv2Sr7rhUKdf5",
      },
    });
    const data = await response.json();
    console.log(data);
    deleteTemplate();
    data.photos.forEach(element => {
      createcard(element.src.medium, element.id);
    });
  } catch (error) {
    console.log(error);
  }
}
