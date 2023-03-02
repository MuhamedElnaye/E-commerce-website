/* End Shop */
/* start Shop */
/* start single product */
let mainImg = document.getElementById("mainimg");
let smallImg = document.getElementsByClassName("smallimg");

smallImg[0].onclick = () => {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = () => {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = () => {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = () => {
  mainImg.src = smallImg[3].src;
};

/* End single product */
