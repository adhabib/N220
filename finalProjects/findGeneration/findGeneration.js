// range function: https://jsremote.jobs/tutorials/range/
function range(start, end) {
  const ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

const genA = range(2013, 2025);
const genZ = range(1997, 2012);
const millenial = range(1981, 1996);
const genX = range(1965, 1980);
const boomer = range(1946, 1964);

function findGen() {
  let age = document.getElementById("age").value;
  age = parseInt(age);
  birthY = 2023 - age;
  switch (true) {
    case birthY <= 2025 && birthY >= 2013:
      for (year of genA) {
        if (birthY == year) {
          document.getElementById("generation").innerHTML =
            "You were born in " + birthY + ". You belong in Generation Alpha!";
        }
      }
      break;
    case birthY <= 2012 && birthY >= 1997:
      for (year of genZ) {
        if (birthY == year) {
          document.getElementById("generation").innerHTML =
            "You were born in " + birthY + ". You belong in Generation Z!";
        }
      }
      break;
    case birthY <= 1996 && birthY >= 1981:
      for (year of millenial) {
        if (birthY == year) {
          document.getElementById("generation").innerHTML =
            "You were born in " + birthY + ". You belong in Generation Y!";
        }
      }
      break;
    case birthY <= 1980 && birthY >= 1965:
      for (year of genX) {
        if (birthY == year) {
          document.getElementById("generation").innerHTML =
            "You were born in " + birthY + ". You belong in Generation X!";
        }
      }
      break;
    case birthY <= 1964 && birthY >= 1946:
      for (year of boomer) {
        if (birthY == year) {
          document.getElementById("generation").innerHTML =
            "You were born in " +
            birthY +
            ". You belong in the Baby Boomer Generation!";
        }
      }
      break;
    default:
      document.getElementById("generation").innerHTML = "Something went wrong";
  }
}

document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
    event.preventDefault();
    findGen();
});

console.log(genA);
console.log(genZ);
console.log(millenial);
console.log(genX);
console.log(boomer);
