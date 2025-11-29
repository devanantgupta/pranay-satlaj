//Form Handling

const formField = document.getElementById("form-field");
formField.addEventListener("submit",formHandling)

function formHandling(event){
    
    const messageErrorPara = document.getElementById("error-msg-para");
    const nameErrorPara = document.getElementById("error-name-para");
    const phoneErrorPara = document.getElementById("error-phone-para");
    const submitMsgPara = document.getElementById("submit-msg-para");
    event.preventDefault();
    nameErrorPara.innerText = "";
    phoneErrorPara.innerText = "";
    messageErrorPara.innerText = "";
    submitMsgPara.innerText = "";

    const phoneInputValue = document.getElementById("phone").value;
    const messageInputValue = document.getElementById("msg").value;
    const nameValue = document.getElementById("name").value;
    const nameRegex = /^[A-Za-z]{5,20}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const messageRegex = /^[A-Za-z0-9\s.,!?'"-]{10,100}$/;


    if(!phoneRegex.test(phoneInputValue)){
        phoneErrorPara.innerText = "\n Please enter Valid 10 digit number"
    }
    if(!messageRegex.test(messageInputValue)){
        messageErrorPara.innerText = "\n Message length must be between 10 to 100 characters"

    }
    if(!nameRegex.test(nameValue)){
        nameErrorPara.innerText = " Name must be characters only and between 5 to 20 characters"
    }
    if(phoneRegex.test(phoneInputValue) && messageRegex.test(messageInputValue) && nameRegex.test(nameValue)){
      submitMsgPara.innerText = "Submitted Successfully"
    }
}

//Gallery


const galleryImages = [
  { src: "./images/gallery/001.jpg" },
  { src: "./images/gallery/002.jpg" },
  { src: "./images/gallery/003.jpg" },
  { src: "./images/gallery/004.jpg" },
  { src: "./images/gallery/005.jpg" },
  { src: "./images/gallery/006.jpg" },
  { src: "./images/gallery/007.jpg" },
  { src: "./images/gallery/008.jpg" },
  { src: "./images/gallery/009.jpg" },
  { src: "./images/gallery/010.jpg" },
  { src: "./images/gallery/011.jpg" },
  { src: "./images/gallery/012.jpg" },
  { src: "./images/gallery/013.jpg" },
  { src: "./images/gallery/014.jpg" },
  { src: "./images/gallery/015.jpg" },
  { src: "./images/gallery/016.jpg" },
  { src: "./images/gallery/017.jpg" },
  { src: "./images/gallery/018.jpg" },
  { src: "./images/gallery/019.jpg" },
  { src: "./images/gallery/020.jpg" },
  { src: "./images/gallery/021.jpg" },
  { src: "./images/gallery/022.jpg" },
  { src: "./images/gallery/023.jpg" },
  { src: "./images/gallery/024.jpg" },
  { src: "./images/gallery/025.jpg" },
];


const galleryDiv = document.getElementById("light-gallery");

for (let i = 0; i < galleryImages.length; i++) {
  const a = document.createElement("a");

  // REQUIRED BY LightGallery
  a.href = galleryImages[i].src;
  a.dataset.src = galleryImages[i].src;

  a.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = galleryImages[i].src;
  img.classList.add("gallery-image");
  img.setAttribute("loading","lazy")

  a.appendChild(img);
  galleryDiv.appendChild(a);
}

// Initialize LightGallery
lightGallery(galleryDiv, {
  selector: "a",
  thumbnail: true,
  plugins: [lgThumbnail, lgFullscreen, lgZoom],
  mobileSettings:{
    controls:true,
    showCloseIcon:true,
    rotate:false,
    download:false
  },
  zoom: true,
  fullScreen: true,
  animateThumb: true,
  showThumbByDefault: true,
  
});


//Date

const footerDatePara = document.getElementById("footer-date-para");
const date = new Date();
const year = date.getFullYear();
footerDatePara.innerHTML = `&copy; ${year} Pranay Satlaj Official. <br> All Rights Reserved`;


//Hamburger

const hamburgerMenu = document.getElementById("hamburger-menu");


hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-clicked");

});
