const getSlider = () => {
  const age = document.getElementById("age").value;
  document.getElementById("rangeVal").innerHTML = age;
};

const getGender = () => {
  // const g = document.getElementsByClassName("gender")["gender"].value;
  // document.getElementById("gender").innerHTML = g;
  const btns = document.querySelectorAll('input[name="gender"]');
  let answer;
  for (const btn of btns) {
    if (btn.checked) {
      answer = btn.value;
      break;
    }
  }
  document.getElementById("gender").innerHTML = answer;
};
