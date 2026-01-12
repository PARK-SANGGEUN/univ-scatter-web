
const imageMap = {
  "가천대": ["슬라이드2.PNG", "슬라이드3.PNG", "슬라이드4.PNG"],
  "가톨릭대": ["슬라이드5.PNG", "슬라이드6.PNG", "슬라이드7.PNG"],
  "건국대": ["슬라이드17.PNG", "슬라이드18.PNG", "슬라이드19.PNG"]
  // 추가 필요 시 여기에 삽입
};

const univSelect = document.getElementById("univ-select");
const container = document.getElementById("image-container");

window.onload = () => {
  Object.keys(imageMap).forEach((univ) => {
    const opt = document.createElement("option");
    opt.value = univ;
    opt.textContent = univ;
    univSelect.appendChild(opt);
  });
};

function updateImages() {
  const selected = univSelect.value;
  container.innerHTML = "";
  if (imageMap[selected]) {
    imageMap[selected].forEach((imgName) => {
      const img = document.createElement("img");
      img.src = `public/${imgName}`;
      img.alt = imgName;
      container.appendChild(img);
    });
  }
}
