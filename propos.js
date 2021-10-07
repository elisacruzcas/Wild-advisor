
// JS SPECIFIQUE AU HEADER
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 


// const textO = document.getElementsByClassName('teamuno');
// const profileP = document.getElementsByClassName('photouno');

// const textOdos = document.getElementsByClassName('teamdos');
// const profilePdos = document.getElementsByClassName('photodos');

// const textOtres = document.getElementsByClassName('teamtres');
// const profilePtres = document.getElementsByClassName('phototres');

// const textOcuatro = document.getElementsByClassName('teamcuatro');
// const profilePcuatro = document.getElementsByClassName('photocuatro');

// const textOcinco = document.getElementsByClassName('teamcinco');
// const profilePcinco = document.getElementsByClassName('photocinco');

// const textOseis = document.getElementsByClassName('teamseis');
// const profilePseis = document.getElementsByClassName('photoseis');

profileP[0].addEventListener('click', () => {
    if(textO[0].style.display !== "inline") {
        textO[0].style.display = "inline"
    } else {
    textO[0].style.display = "none"
    }
  });


// profilePdos[0].addEventListener('click', () => {
//     if(textOdos[0].style.display !== "inline") {
//         textOdos[0].style.display = "inline"
//     } else {
//     textOdos[0].style.display = "none"
//     }
//   });

//   profilePtres[0].addEventListener('click', () => {
//     if(textOtres[0].style.display !== "inline") {
//         textOtres[0].style.display = "inline"
//     } else {
//     textOtres[0].style.display = "none"
//     }
//   });

  profilePcuatro[0].addEventListener('click', () => {
    if(textOcuatro[0].style.display !== "inline") {
        textOcuatro[0].style.display = "inline"
    } else {
    textOcuatro[0].style.display = "none"
    }
  });

//   profilePcinco[0].addEventListener('click', () => {
//     if(textOcinco[0].style.display !== "inline") {
//         textOcinco[0].style.display = "inline"
//     } else {
//     textOcinco[0].style.display = "none"
//     }
//   });

//   profilePseis[0].addEventListener('click', () => {
//     if(textOseis[0].style.display !== "inline") {
//         textOseis[0].style.display = "inline"
//     } else {
//     textOseis[0].style.display = "none"
//     }
//   });