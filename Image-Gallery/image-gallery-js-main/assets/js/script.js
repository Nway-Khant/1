// Array of image sources
var imageSources = [
  {
    src: "./assets/images/img1.png",
    // title: "Image 1",
    description: "ဘာဟင်းချက်မယ်ထင်သလဲ?",
  },
  {
    src: "./assets/images/img2.png",
    // title: "Image 2",
    description: "ပါဝင်တဲ့အမျိုးအမည်တွေသိလား?",
  },
  {
    src: "./assets/images/img3.png",
    // title: "Image 3",
    description: "ဟင်းခတ်အမွှေးအကြိုင်တွေစုံလို့",
  },
  {
    src: "./assets/images/img4.png",
    // title: "Image 4",
    description: "နောက်တစ်မျိုးဟင်းခတ်အမွှေးအကြိုင်တွေ",
  },
  {
    src: "./assets/images/img5.png",
    // title: "Image 5",
    description: "ဟင်းချက်နည်းများစာအုပ်",
  },
  {
    src: "./assets/images/img6.png",
    // title: "Image 6",
    description: "ပင်လယ်အစားအစာများ",
  },
  {
    src: "./assets/images/plant.png",
    // title: "Image 7",
    description: "ကြီးပွါးတိုးတက်အောင်ပြုစုရမယ်",
  },
  {
    src: "./assets/images/cat.png",
    // title: "Image 8",
    description: "ကြောင်လေးကချစ်စရာလေး",
  },
  {
    src: "./assets/images/dog.png",
    // title: "Image 9",
    description: "ခွေးလေးကလဲ အလန်းပဲ",
  },
  {
    src: "./assets/images/fish.png",
    // title: "Image 10",
    description: "နီမိုငါးလေးကို လိုက်ရှာရအောင်",
  },
  {
    src: "./assets/images/football.png",
    // title: "Image 11",
    description: "ဘောလုံးကန်တတ်လား",
  },
  {
    src: "./assets/images/nerdNote.png",
    // title: "Image 12",
    description: "စာကြမ်းပိုးလေး",
  },
  {
    src: "./assets/images/mac.png",
    // title: "Image 13",
    description: "ပန်းသီးကွန်ပြူတာတံဆိပ်",
  },
  {
    src: "./assets/images/linux.png",
    // title: "Image 14",
    description: "လင်းနက်စ်ကွန်ပြူတာတံဆိပ်",
  },
  {
    src: "./assets/images/window.png",
    // title: "Image 15",
    description: "ဝင်းဒိုးကွန်ပြူတာတံဆိပ်",
  },
  {
    src: "./assets/images/git.png",
    // title: "Image 16",
    description: "ဒါကတော့ ဂစ်ရဲ့အမှတ်အသား",
  },
  {
    src: "./assets/images/gitBash.png",
    // title: "Image 17",
    description: "ဒါကတော့ ဂစ်ဘက်ရှ်ရဲ့အမှတ်အသား",
  },
  {
    src: "./assets/images/github.png",
    // title: "Image 18",
    description: "ဒါကတော့ ဂစ်ဟပ်ဗ်ရဲ့အမှတ်အသား",
  },
  {
    src: "./assets/images/gitlab.png",
    // title: "Image 19",
    description: "ဒါကတော့ ဂစ်လက်ဘ်ရဲ့အမှတ်အသား",
  },
  {
    src: "./assets/images/propertyValue.png",
    // title: "Image 20",
    description: "ပစ္စည်းတစ်ခုရဲ့ အရည်အသွေး",
  },
  {
    src: "./assets/images/plant2.png",
    // title: "Image 21",
    description: "ပန်းပင်လေးတွေစိုက်ကြစို့",
  },
  {
    src: "./assets/images/read.png",
    // title: "Image 22",
    description: "စာဖတ်ဖို့မမေ့နဲ့နော်",
  },
  {
    src: "./assets/images/plant4.png",
    // title: "Image 23",
    description: "ဒါဘာအရွက်လဲ သိလား",
  },
  {
    src: "./assets/images/OnTheJob.png",
    // title: "Image 24",
    description: "အချိန်နဲ့အလုပ်ကို လေးစားပါ",
  },
  {
    src: "./assets/images/note.png",
    // title: "Image 25",
    description: "စာတွေအများကြီးဖတ်လိုက်မယ်",
  },
  {
    src: "./assets/images/nerdNote.png",
    // title: "Image 26",
    description: "စာကြမ်းပိုးလေးနောက်တစ်ယောက်",
  },
  {
    src: "./assets/images/love.png",
    // title: "Image 27",
    description: "ဒါ ဘာသင်္ကေတလဲ သိလား",
  },
  {
    src: "./assets/images/light.png",
    // title: "Image 28",
    description: "မီးလာပြီ ဟေး",
  },
  {
    src: "./assets/images/hint.png",
    // title: "Image 29",
    description: "ဟမ် စဥ်းစားလိုက်ဦးမယ်",
  },
  {
    src: "./assets/images/dhammaWheel.png",
    // title: "Image 30",
    description: "ဒါက ဘာအဓိပ္ပါယ်လဲ သိလား",
  },
  {
    src: "./assets/images/deepDive1.png",
    // title: "Image 31",
    description: "ရေအောက်ကြမ်းပြင်မှာ ဘာတွေရှိနိုင်လဲ",
  },
  {
    src: "./assets/images/assignment.png",
    // title: "Image 32",
    description: "အိမ်စာတွေ လုပ်ကြစို့နော်",
  },
  // Add more image objects as needed
];

var currentIndex = 0;
var totalImages = imageSources.length;

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateImageVisibility();
}

// Function to show the previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateImageVisibility();
}

// Function to update image visibility based on currentIndex
function updateImageVisibility() {
  var imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // Clear existing images

  var imgDiv = document.createElement("div"); // Create a container for the current image
  imgDiv.classList.add("imageItem");

  var img = document.createElement("img");
  img.src = imageSources[currentIndex].src;
  img.alt = imageSources[currentIndex].title;
  imgDiv.appendChild(img);

  // Create title and paragraph for image name and text description
  var title = document.createElement("div");
  title.classList.add("title");
  title.textContent = imageSources[currentIndex].title;
  imgDiv.appendChild(title);

  var description = document.createElement("div");
  description.classList.add("description");
  description.textContent = imageSources[currentIndex].description;
  imgDiv.appendChild(description);

  // Append image container to body
  imageContainer.appendChild(imgDiv);
}

// Show the initial image
updateImageVisibility();
