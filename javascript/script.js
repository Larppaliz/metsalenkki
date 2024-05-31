
document.addEventListener("DOMContentLoaded", function() {
const quickGameTutorialButton = document.querySelector('.quick-game-tutorial-button');
const quickGameEndButton = document.querySelector('.quick-game-menu-button');
const gameTutorial = document.querySelector('.game-tutorial');
const closeTutorialButton = document.getElementById('close-tutorial');
const closeBook = document.getElementById('close-button');
const startGameButton = document.getElementById('start-game');
const gameTutorialButton = document.getElementById('game-tutorial-button');
const arrowButtons = document.querySelectorAll('.arrow-button');
const animalPickButtons = document.querySelectorAll('.animal-pick-button');
const animalButton = document.querySelector('.animal-button');
const animalBook = document.querySelector('.animal-book');
const menuStuff = document.querySelector('.MenuStuff')
const closeBookButton = document.getElementById('close-button');
const searchButton = document.querySelector('.search-button');
const menuStuffText = document.getElementById('menutext');
const gameTutorialHeaderText = document.querySelector('.game-tutorial h2');
const gameTutorialText = document.querySelector('.game-tutorial p');



const animals = [{
  id: "metsajanis",
  image: "metsajanis-metsa.jpg",

  name: [{
      fi: "Metsäjänis",
      en: "Mountain Hare",
  }],
  description_1: [{
      fi: "Metsäjänis (Lepus timidus) on jäniseläinten lahkoon kuuluva nisäkäs, joka on sopeutunut pohjoisen Euraasian oloihin. Metsäjänis esiintyy yhtenäisesti Euroopan ja Aasian pohjoisosissa Puolasta ja Skandinaviasta Tyynellemerelle.",
      en: "The mountain hare (Lepus timidus) is a mammal belonging to the order of lagomorphs, adapted to the conditions of northern Eurasia. The mountain hare is found continuously in northern parts of Europe and Asia, from Poland and Scandinavia to the Pacific Ocean.",
  }],
  description_2: [{
      fi: "Lisäksi eristyneitä populaatioita on Hokkaidōssa, Kuriileilla, Sahalinilla, Alpeilla, Irlannissa ja Skotlannissa. Lajia on istutettu Englantiin, Färsaarille ja monille Skotlannin saarille. Suomessa metsäjänistä tavataan koko maassa.",
      en: "Additionally, isolated populations are found in Hokkaido, the Kuriles, Sakhalin, the Alps, Ireland, and Scotland. The species has been introduced to England, the Faroe Islands, and many Scottish islands. In Finland, the mountain hare is found throughout the country.",
  }],
  question: [{
    fi: {
      title: "Minkä eläimen näet?",
      choice1: "Metsäjänis",
      choice2: "Siili",
    },
    en: {
      title: "Which animal do you see?",
      choice1: "Mountain Hare",
      choice2: "Hedgehog",
    },
    correctChoice: 1,
  }],
}, {
  id: "orava",
  image: "orava-metsa.jpg",

  name: [{
      fi: "Orava",
      en: "Squirrel",
  }],
  description_1: [{
      fi: "Orava (Sciurus vulgaris) on jyrsijöiden lahkoon kuuluva nisäkäslaji. Oravaa esiintyy Euraasian pohjoisosien metsissä ja suurimmassa osassa Eurooppaa. Orava kiipeilee puunrungolla taitavasti.",
      en: "The squirrel (Sciurus vulgaris) is a mammal species belonging to the order of rodents. The squirrel is found in the forests of northern Eurasia and in most of Europe. The squirrel skillfully climbs tree trunks.",
  }],
  description_2: [{
      fi: "Orava on sekasyöjä, jonka suosikkiruokaa ovat kuusensiemenet ja muut siemenet. Orava ei horrosta talvella vaan asustaa lämpimässä talvipesässään ja syö kätköihin keräämiään siemeniä. Oravia elää monenlaisissa metsissä aina kolmen kilometrin korkeuteen merenpinnasta. Oravia elää havumetsien lisäksi lehti- ja sekametsissä, puistoissa, puutarhoissa ja pienissäkin havumetsiköissä.",
      en: "The squirrel is an omnivore, whose favorite food is spruce seeds and other seeds. The squirrel does not hibernate in winter but lives in its warm winter nest and eats seeds collected in its caches. Squirrels live in various types of forests up to an altitude of three kilometers above sea level. They live not only in coniferous forests but also in deciduous and mixed forests, parks, gardens, and even small groves.",
  }],
  question: [{
    fi: {
      title: "Minkä eläimen näet?",
      choice1: "Orava",
      choice2: "Metsämyyrä",
    },
    en: {
      title: "Which animal do you see?",
      choice1: "Squirrel",
      choice2: "Bank Vole",
    },
    correctChoice: 1,
  }],
}, {
  id: "metsamyyra",
  image: "metsamyyra-metsa.jpg",

  name: [{
      fi: "Metsämyyrä",
      en: "Bank Vole",
  }],
  description_1: [{
      fi: "Metsämyyrä (Clethrionomys glareolus, syn. Myodes glareolus) on punaruskea, pääasiassa metsissä elävä jyrsijälaji. Se on hyvin yleinen Euroopassa ja elää lähes koko mantereella ja myös Siperiassa Baikaljärvelle saakka.",
      en: "The bank vole (Clethrionomys glareolus, syn. Myodes glareolus) is a reddish-brown rodent species that primarily lives in forests. It is very common in Europe, inhabiting almost the entire continent and also found in Siberia as far as Lake Baikal.",
  }],
  description_2: [{
      fi: "Metsämyyrä syö pääasiallisesti kasviravintoa. Metsämyyrä elää erilaisissa metsissä. Lajin levinneisyysalueen eteläosissa se viihtyy lehti- ja sekametsässä, mutta esimerkiksi Suomessa se elää myös havumetsissä. Metsämyyrä suosii erityisesti tiheää aluskasvillisuutta. Sitä tavataan joskus myös pensaikoista kaukana metsistä.",
      en: "The bank vole primarily eats plant-based food. It lives in various types of forests. In the southern parts of its range, it prefers deciduous and mixed forests, but in Finland, for example, it also inhabits coniferous forests. The bank vole particularly favors dense undergrowth and is sometimes found in thickets far from forests.",
  }],
  question: [{
    fi: {
      title: "Minkä eläimen näet?",
      choice1: "Metsämyyrä",
      choice2: "Näätä",
    },
    en: {
      title: "Which animal do you see?",
      choice1: "Bank Vole",
      choice2: "Pine Marten",
    },
    correctChoice: 1,
  }],
}, {
  id: "siili",
  image: "siili-metsa.jpg",

  name: [{
      fi: "Siili",
      en: "Hedgehog",
  }],
  description_1: [{
      fi: "Siili eli eurooppalainen siili (Erinaceus europaeus) on siilien (Erinaceidae) heimoon kuuluva piikikäs nisäkäslaji. Se on yöeläin, jota esiintyy Länsi-Euroopassa sekä Pohjois-Euroopan lauhkeimmissa osissa.",
      en: "The hedgehog or European hedgehog (Erinaceus europaeus) is a spiny mammal species belonging to the family Erinaceidae. It is a nocturnal animal found in Western Europe and the milder parts of Northern Europe.",
  }],
  description_2: [{
      fi: "Suomessa laji elää aina Perämeren pohjukassa asti, satunnaisesti pohjoisempanakin. Sitä tavataan niittyjen reuna-alueilla ja kulttuuriympäristöissä, joissa on sopivasti suojaisia pesäpaikkoja. Suomessa siiliä tavataan Etelä- ja Keski-Suomessa Perämeren pohjukasta Kainuuseen saakka ulottuvalla alueella. Suomessa siili elää lähes aina asutuksen seuralaisena kulttuuriympäristössä, eikä sitä eräässä tutkimuksessa havaittu pariasataa metriä kauempana asuinrakennuksesta. Etenkään havumetsässä siili ei viihdy. Muualla Euroopassa siiliä tapaa myös lehtimetsistä.",
      en: "In Finland, the species lives as far north as the northernmost parts of the Bothnian Bay, and occasionally even further north. It is found on the edges of meadows and in cultural environments that offer suitable shelter. In Finland, the hedgehog is found in Southern and Central Finland, from the northern parts of the Bothnian Bay to Kainuu. In Finland, the hedgehog almost always lives near human habitation in cultural environments, and it was not found more than a couple of hundred meters away from a dwelling in one study. It does not thrive in coniferous forests. Elsewhere in Europe, hedgehogs are also found in deciduous forests.",
  }],
  question: [{
    fi: {
      title: "Minkä eläimen näet?",
      choice1: "Metsämyyrä",
      choice2: "Siili",
    },
    en: {
      title: "Which animal do you see?",
      choice1: "Bank Vole",
      choice2: "Hedgehog",
    },
    correctChoice: 2,
  }],
}, {
  id: "mayra",
  image: "mayra-metsa.jpg",

  name: [{
      fi: "Mäyrä",
      en: "Badger",
  }],
  description_1: [{
      fi: "Mäyrä (Meles meles) on ahman jälkeen suurin Suomessa elävä näätäeläin. Euroopassa mäyrät suosivat lehtimetsiä, joissa on aukioita, tai viljelymaita, joissa on pieniä metsikköjä.",
      en: "The badger (Meles meles) is the largest mustelid living in Finland after the wolverine. In Europe, badgers prefer deciduous forests with clearings or farmland with small woods.",
  }],
  description_2: [{
      fi: "Lajia tavataan myös seka- ja havumetsissä, pensaikoissa, esikaupunkialueilla ja kaupunkipuistoissa. Tiheimmät esiintymät ovat Alpeilla ja Pyreneillä sekä Britanniassa, erityisesti Irlannissa. Suomessa mäyrä elää koko maassa, pohjoisinta Lappia lukuun ottamatta. Mäyrä ei pidä kosteasta maaperästä, joten se karttaa soita ja muita kosteikkoja.",
      en: "The species is also found in mixed and coniferous forests, thickets, suburban areas, and city parks. The densest populations are in the Alps and Pyrenees and in Britain, particularly Ireland. In Finland, the badger lives throughout the country except for the northernmost Lapland. Badgers do not like wet soil, so they avoid bogs and other wetlands.",
  }],
  question: [{
    fi: {
      title: "Minkä eläimen näet?",
      choice1: "Mäyrä",
      choice2: "Metsäjänis",
    },
    en: {
      title: "Which animal do you see?",
      choice1: "Badger",
      choice2: "Mountain Hare",
    },
    correctChoice: 1,
  }],
},   {
  id: "naata",
  image: "naata-metsa.jpg",

  name: [{
      fi: "Näätä",
      en: "Pine Marten",
  }],
  description_1: [{
      fi: "Näätä eli mäntynäätä (Martes martes) on näätäeläimiin kuuluva nisäkäslaji. Se on heimonsa tyypillinen edustaja ja siksi antanut nimensäkin sille.",
      en: "The pine marten (Martes martes) is a mammal species belonging to the family Mustelidae. It is a typical representative of its family and has therefore given its name to it.",
  }],
  description_2: [{
      fi: "Sitä tavataan lähes koko Euroopassa sekä osissa Lähi-itää, Kaukasuksella ja Siperian länsiosissa. Näätä elää sekä lehti-, seka- että havumetsissä ja pensaikoissa. Laji viihtyy erityisesti metsissä, jonka latvuston peitteisyys on vajaa ja jossa on tiheä alikasvos.",
      en: "It is found throughout most of Europe, parts of the Middle East, the Caucasus, and western Siberia. The pine marten lives in deciduous, mixed, and coniferous forests and thickets. The species particularly thrives in forests with a sparse canopy and dense undergrowth.",
  }],
  question: [{
    fi: {
      title: "Minkä eläimen näet?",
      choice1: "Metsäjänis",
      choice2: "Näätä",
    },
    en: {
      title: "Which animal do you see?",
      choice1: "Mountain Hare",
      choice2: "Pine Marten",
    },
    correctChoice: 2,
  }],
},
{
  id: "metsakauris",
  image: "metsakauris-metsa.jpg",

  name: [{
      fi: "Metsäkauris",
      en: "Roe Deer",
  }],
  description_1: [{
      fi: "Metsäkauris (Capreolus capreolus) on Euroopassa yleisenä elävä pienikokoinen, lyhythäntäinen ja monenlaisiin elinympäristöihin sopeutunut hirvieläin.",
      en: "The roe deer (Capreolus capreolus) is a small, short-tailed deer that is common in Europe and adapted to a variety of habitats.",
  }],
  description_2: [{
      fi: "Laji on levittäytynyt Suomeen 1900-luvulla sekä luontaisesti että siirtoistutusten avulla, ja nykyisin se on tärkeä riistaeläin. Metsäkauris ei ole vaativa elinympäristönsä suhteen. Sitä tavataan monentyyppisillä alueilla, kuten lehti- ja sekametsissä, niityillä, pelloilla ja harvaan rakennetuilla esikaupunkialueillakin. Erityisesti se viihtyy seuduilla, joilla on lähekkäin sekä metsää että maatalousmaata. Se sopeutuu hyvin myös moderniin maatalousympäristöön.",
      en: "The species spread to Finland in the 20th century both naturally and through reintroductions and is now an important game animal. The roe deer is not very demanding regarding its habitat and is found in various areas, such as deciduous and mixed forests, meadows, fields, and sparsely built suburban areas. It particularly thrives in regions with both forests and farmland nearby and adapts well to modern agricultural environments.",
  }],
  question: [{
    fi: {
      title: "Minkä eläimen näet?",
      choice1: "Hirvi",
      choice2: "Metsäkauris",
    },
    en: {
      title: "Which animal do you see?",
      choice1: "Moose",
      choice2: "Roe Deer",
    },
    correctChoice: 2,
  }],
}, {
    id: "hirvi",
    image: "hirvi-metsa.jpg",
  
    name: [{
        fi: "Hirvi",
        en: "Moose",
    }],
    description_1: [{
        fi: "Hirvi (Alces alces) on hirvieläinten heimoon kuuluva suurikokoinen nisäkäslaji, joka elää pohjoisella havumetsävyöhykkeellä Euroopassa ja läntisessä Aasiassa.",
        en: "The moose (Alces alces) is a large mammal species belonging to the deer family, living in the northern boreal forests of Europe and western Asia.",
    }],
    description_2: [{
        fi: "Hirvi on heimonsa suurin laji, ja sonni voi painaa yli 700 kilogrammaa. Hirvisonneilla on täysiluiset hanko- tai lapiosarvet. Hirvet syövät sekä vesikasveja että kuivan maan kasveja. Ne voivat saada aikaan pahoja metsätuhoja syömällä oksia ja kuorta ja taittamalla puiden latvuksia ja syömällä männyn taimia. Hirven elinympäristöä ovat pohjoisen havumetsävyöhykkeen ja lauhkean vyöhykkeen metsät. Pohjoisella levinneisyysalueella hirvi käyttää säännöllisesti kesäisin pensastundraa. Jotkin yksilöt jäävät myös talvehtimaan tundran pensaikkoisiin jokilaaksoihin.",
        en: "The moose is the largest species in its family, with bulls weighing over 700 kilograms. Bull moose have fully bone antlers, which can be either palmate or branching. Moose feed on both aquatic and terrestrial plants. They can cause severe forest damage by eating branches and bark, breaking tree tops, and eating pine seedlings. Moose habitats include boreal and temperate forests. In their northern range, moose regularly use shrub tundra in summer. Some individuals also overwinter in shrub-covered river valleys in the tundra.",
    }],
    question: [{
        fi: {
          title: "Minkä eläimen näet?",
          choice1: "Metsäkauris",
          choice2: "Hirvi",
        },
        en: {
          title: "Which animal do you see?",
          choice1: "Roe Deer",
          choice2: "Moose",
        },
        correctChoice: 2
    }],
}];



const backGround = document.querySelector('.background');

const gameTitle = document.querySelector('.game-title');

const gameUI = document.querySelector('.game-ui');

const navButtons = [document.getElementById("close-button"), document.getElementById("prev-button"),document.getElementById("next-button"), document.getElementById("first-page-button")];
const pagePicker = document.querySelectorAll('.animal-pick-button');

const containers = document.querySelectorAll('.animal-container');

animalPickButtons.forEach(element => {
  element.addEventListener("click", (event) => {
    currentPage = event.target.id-1;
    displayAnimal(currentPage);
  });
});

quickGameEndButton.addEventListener('click', () => {
  gameEnd(false);
});


quickGameTutorialButton.addEventListener('click', () => {
  showBook(false);
  if (gameTutorial.style.display == "block")
  {
    gameTutorial.style.display = 'none';
  }
  else
  {
    gameTutorial.style.display = 'block';
  }
});
 
gameTutorialButton.addEventListener('click', () => {
  gameTutorial.style.display = 'block';
  showBook(false);
});

closeTutorialButton.addEventListener('click', () => {
  gameTutorial.style.display = 'none';
});

closeBook.addEventListener('click', () => {
  showBook(false);
});

animalButton.addEventListener('click', () => {
  showTutorial(false);
  if (animalBook.style.display == "block")
  {
    showBook(false);
  }
  else
  {
    showBook(true);
  }
});

const grid = { rows: 3, cols: 7 };
var position = { row: 2, col: 7 };

var forest_animals = [];

arrowButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    
    if (event.target.id === "up") {
      if (position.col === 1) 
      { 

      gameEnd(true);
      return; 
      }
      position.col--;
    }

    if (event.target.id === "down") {
      if (position.col < 7) 
      { 
        position.col++;
      }
    }

    if (position.col === 1) 
      { 
        if ( language == "fi") arrowButtons[1].textContent = "Lopeta Peli";
        if ( language == "en") arrowButtons[1].textContent = "End Game";
        arrowButtons[1].style.width = `200px`;
      }
      else
      {
        arrowButtons[1].textContent = "↑";
        arrowButtons[1].style.width = `50px`;
      }
    

    if (event.target.id === "left") {
      position.row--;
    }

    if (event.target.id === "right") {
      position.row++;
    }

    if (position.row == 1) {
      arrowButtons.forEach(button => {
        if (button.id != "right") { button.style.display = "none"; }
      });
    }
    else if (position.row == 3) {
      arrowButtons.forEach(button => {
        if (button.id != "left") { button.style.display = "none"; }
      });
    }
    else {
      arrowButtons.forEach(button => {
        {
          button.style.display = "block";
        }
      });
    }

    var thing = position.col-1;

    var backgroundImage = "";

    if(position.row == 3) thing += 7;

    for (var i = 0; i < animals.length; i++)
    {
        if (animals[i].id == forest_animals[thing] && position.row != 2)
        {
          backgroundImage = `url(images/forest/`+animals[i].image+`)`;

          backGround.style.backgroundImage = backgroundImage;
          return;
        }
    }

    backgroundImage = `url(images/grid/grid_${position.col}.jpg)`;

    if (position.row == 1)
    {
      backgroundImage = `url(images/grid/grid_${position.col}L.jpg)`;
    }
    if (position.row == 3)
    {
      backgroundImage = `url(images/grid/grid_${position.col}R.jpg)`;
    }

    backGround.style.backgroundImage = backgroundImage;
  });
});
startGameButton.addEventListener("click", () => {

  
  displayAnimal(currentPage);
  showBook(false);
  showTutorial(false);
  arrowButtons[1].textContent = "↑";
        arrowButtons[1].style.width = `50px`;
        
  points = 0;

  foundAnimals = [""]

  position = { row: 2, col: 7 };


  interval = setInterval(startTimer, 1000);

  for (var z = 0; z < 12; z++)
  {
    forest_animals.push("none");
  }

  animals.forEach(entry => {
    forest_animals.push(entry.id);
  });


  forest_animals.sort((a,b) => 0.5 - Math.random());

  maxPoints = 0;

  for (var i = 0; i < 14; i++)
  {
     animals.forEach(element => {
      if (element.id == forest_animals[i])
      {
        maxPoints++;
      }
     });
  }

  score.textContent = points+"/"+maxPoints;

  seconds = 0;
  minutes = 0;
  
  timer.textContent = formatTime(minutes) + ":" + formatTime(seconds);
  backGround.style.backgroundImage = `url(images/grid/grid_${position.col}.jpg)`;

  gameUI.style.display = "block";

  menuStuff.style.display = "none";

  document.querySelector(".game-buttons").style.display = "flex";
  questionScreen.forEach((entry) => (entry.style.display = "none"));


  arrowButtons.forEach(button => {
    button.style.display = "block";
  });

  pagePicker.forEach(picker => {
    ida = picker.id - 1;
    pag = animals[ida];
    picker.style.backgroundImage = "url(images//animalbook//" + pag.id + ".jpg)";
  });
});

var foundAnimals = [""];

const questionScreen = document.querySelectorAll('.questions-screen');

const queTitle = document.getElementById("question")

const answer_1 = document.getElementById('answer1');

const answer_2 = document.getElementById('answer2');

var points = 0;

var maxPoints = 0;

var corrAnswr = 0;

var currentAnimal = "";

var score = document.getElementById("score");

document.querySelector(".questions-screen").style.display = "none";



searchButton.addEventListener("click", (event) => {

  showBook(false);
  showTutorial(false);
  if (position.row == 2) return;
  var thing = position.col-1;

  if(position.row == 3) thing += 7;

  for (var i = 0; i < animals.length; i++)
  {
    if (animals[i].id == forest_animals[thing] && !foundAnimals.includes(animals[i].id))
    {

      document.querySelector(".questions-screen").style.display = "block";
          
      if (language === "fi")
      {
        queTitle.textContent = animals[i].question[0].fi.title;
        answer_1.textContent = animals[i].question[0].fi.choice1;
        answer_2.textContent = animals[i].question[0].fi.choice2;
      }

      if (language === "en")
      {
        queTitle.textContent = animals[i].question[0].en.title;
        answer_1.textContent = animals[i].question[0].en.choice1;
        answer_2.textContent = animals[i].question[0].en.choice2;
      }
          corrAnswr = animals[i].question[0].correctChoice;

          currentAnimal = animals[i].id;
              
          document.querySelector(".game-buttons").style.display = "none";

      return;
    }
  }
});

const answerButtons = [answer_1, answer_2];

var guh = true;

answerButtons.forEach(button => {
button.addEventListener("click", (event) => {

  if (guh)
  {

    guh = false;
  var thing = position.col-1;

  var answrID = answerButtons.indexOf(button)+1;

  if (corrAnswr === answrID)
  {
    points++;
    
    foundAnimals.push(currentAnimal);

  }

  answerButtons.forEach(element => {
    if (answerButtons.indexOf(element)+1 === corrAnswr)
    {
      element.style.backgroundColor = "green";
    }
    else
    {
      element.style.backgroundColor = "red";
    }
  });

  
  score.textContent = points+"/"+maxPoints;

  setTimeout(() => {
    guh = true;
    document.querySelector(".questions-screen").style.display = "none";     
    document.querySelector(".game-buttons").style.display = "block";
    
    

    answerButtons.forEach(element => {
    element.style.backgroundColor = "orange";
    });
  }, 1500);
}
});
});

function gameEnd(win)
{
  

  menuStuff.style.display = "block";


  if (win)
  {
    menutext.style.fontSize = "30px"
    if (language ==="fi") menutext.textContent = "Löysit takaisin teltalle!! Aika: "+timer.textContent+"  Pisteet: "+points+"/"+maxPoints;
    if (language === "en") menutext.textContent = "You made it back to the tent!! Time: "+timer.textContent+" Points: "+points+"/"+maxPoints;
  }
  else
  {
      menutext.style.fontSize = "50px"
      if (language ==="fi") menutext.textContent = "Metsälenkki";
      if (language === "en") menutext.textContent = "Forest Walk";
  }

  gameUI.style.display = "none";
  showBook(false);
  showTutorial(false);

  stopTimer();
  

  backGround.style.backgroundImage = "url(images/start.jpg)";

}

let minutes = 0;
let seconds = 0;
let timer = document.getElementById("timer");
let interval = 0;  

function startTimer() 
{
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  timer.textContent = formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function stopTimer() {
clearInterval(interval);
}

let currentPage = -1;

updateBookText(currentPage);

function displayAnimal(index) 
{
  updateArrows();
  if (index < 0 ) return
  const page = animals[index];

  updateBook();

  updateBookText(index);

  document.getElementById(`animal-img-left`).src = "images//animalbook//"+page.id+".jpg";
}

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");


pagePicker.forEach(picker => {
  picker.addEventListener("click", () => {
    setPage(picker.id-1);
  });
});

prevButton.addEventListener("click", () => {
  if (currentPage > -1) currentPage--;

  displayAnimal(currentPage);

  updateBook();
});

nextButton.addEventListener("click", () => {
  if (currentPage < animals.length-1) currentPage++;
  displayAnimal(currentPage);

  updateBook();
});

const fpButton = document.getElementById("first-page-button");

fpButton.addEventListener("click", () => {
  currentPage = -1;
  displayAnimal(currentPage);

  updateBook();
});

function setPage(index)
{
  currentPage = index;

  displayAnimal(index);

  updateBook();
}

function showTutorial(bool)
{
  if (bool)
  {
    gameTutorial.style.display = "block";
  }
  else
  {
    gameTutorial.style.display = "none";
  }
}

function showBook(showType) {
  if (showType) {
    animalBook.style.display = "block";
    navButtons.forEach(element => {
      element.style.display = "block";
    });

    updateArrows();
  } 
  else {
    animalBook.style.display = "none";
    navButtons.forEach(element => {
      element.style.display = "none";
    });
  }
}

function updateBook() {
  
  if (currentPage < 0)
  {
    pagePicker.forEach(picker => picker.style.display = "block");
    containers.forEach(container => container.style.display = "none");
  }
  else
  {
    pagePicker.forEach(picker => picker.style.display = "none");
    containers.forEach(container => container.style.display = "block");
  }
}


function updateArrows()
{
  if (currentPage < 0)
  {    
    prevButton.style.display = "none";
  }
  else
  {
    prevButton.style.display = "block";
  }
  
  if (currentPage > 6)
  {
    nextButton.style.display = "none";
  }
  else
  {
    nextButton.style.display = "block";
  }
}

var language = "";


function switchLanguage(lang) {
  if (language === lang) return;
  translate(lang);
  language = lang;
  updateLanguageButtons();
}

function translate(lang) {
  const langTranslations = translations[lang];
  Object.keys(langTranslations).forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
          element.textContent = langTranslations[selector];
      });
  });
}

const translations = {
  fi: {
      "#game-title": "Metsälenkki Peli",
      "#menutext": "Metsälenkki",
      "#start-game": "Aloita peli",
      "#game-tutorial-button": "Peliohjeet",
      ".credits1": "pelin tekijä: lari lievonen",
      ".credits2": "kuvat: pixabay.com",
      ".credits3": "eläinkirja tiedot: wikipedia.com",
      "#tutorial-title": "Peliohjeet",
      "#tutorial-instruction1": "Liiku eteenpäin keskimmäisellä nuolella ja käänny eri suuntiin vasemmalla ja oikealla olevilla nuolilla",
      "#tutorial-instruction2": "Voit löytää eläimiä kääntymällä vasemmalle tai oikealle",
      "#tutorial-instruction3": "Kun löydät eläimen sinun pitää painaa etsi painikkeesta niin peli kysyy sinulta kysymyksiä. Kun vastaat kysymykseen oikein, saat pisteen.",
      "#close-tutorial": "Sulje",
      "#close-button": "Sulje",
      "#prev-button": "←",
      "#first-page-button": "←←",
      "#next-button": "→",
      "#left": "←",
      "#up": "↑",
      "#down": "↓",
      "#right": "→",
      ".animal-button": "Eläinkirja",
      ".search-button": "Etsi",
      ".quick-game-tutorial-button": "?",
      ".quick-game-menu-button": "X",
      ".animal1": "Metsäjänis",
      ".animal2": "Orava",
      ".animal3": "Metsämyyrä",
      ".animal4": "Siili",
      ".animal5": "Mäyrä",
      ".animal6": "Näätä",
      ".animal7": "Metsäkauris",
      ".animal8": "Hirvi",
      "#question": "Kysymys",
      "#answer1": "Vastaus1",
      "#answer2": "Vastaus2"
  },
  en: {
      "#game-title": "Forest Walk Game",
      "#menutext": "Forest Walk",
      "#start-game": "Start Game",
      "#game-tutorial-button": "Game Tutorial",
      ".credits1": "game creator: Lari Lievonen",
      ".credits2": "images: pixabay.com",
      ".credits3": "animal book information: wikipedia.com",
      "#tutorial-title": "Game Tutorial",
      "#tutorial-instruction1": "Move forward with the middle arrow and turn in different directions with the left and right arrows",
      "#tutorial-instruction2": "You can find animals by turning left or right",
      "#tutorial-instruction3": "When you find an animal, you need to press the search button, and the game will ask you questions. If you answer the question correctly, you get a point.",
      "#close-tutorial": "Close",
      "#close-button": "Close",
      "#prev-button": "←",
      "#first-page-button": "←←",
      "#next-button": "→",
      "#left": "←",
      "#up": "↑",
      "#down": "↓",
      "#right": "→",
      ".animal-button": "Animal Book",
      ".search-button": "Search",
      ".quick-game-tutorial-button": "?",
      ".quick-game-menu-button": "X",
      ".animal1": "Forest Hare",
      ".animal2": "Squirrel",
      ".animal3": "Forest Vole",
      ".animal4": "Hedgehog",
      ".animal5": "Badger",
      ".animal6": "Marten",
      ".animal7": "Roe Deer",
      ".animal8": "Moose",
      "#question": "Question",
      "#answer1": "Answer1",
      "#answer2": "Answer2"
  }
};

var fiButton = document.getElementById('lang-fi');
var enButton = document.getElementById('lang-en');

fiButton.addEventListener('click', () => {
  switchLanguage('fi');
});

enButton.addEventListener('click', () => {
  switchLanguage('en');
});

function updateLanguageButtons()
{
  fiButton.style.borderColor = "black"; 
  enButton.style.borderColor = "black"; 
  if (language === "fi")
  {
    fiButton.style.borderColor = "blue"; 
  }

  if (language === "en")
    {
      enButton.style.borderColor = "blue"; 
    }

    updateBookText(currentPage);
}

function updateBookText(index)
{
  if (index < 0 ) return;
  const page = animals[index];

  if (language === "fi") {
    document.getElementById(`animal-name-left`).textContent = page.name[0].fi;
    document.getElementById(`animal-description-left`).textContent = page.description_1[0].fi;
    document.getElementById(`animal-description-right`).textContent = page.description_2[0].fi;
  }
  if (language === "en") {
    document.getElementById(`animal-name-left`).textContent = page.name[0].en;
    document.getElementById(`animal-description-left`).textContent = page.description_1[0].en;
    document.getElementById(`animal-description-right`).textContent = page.description_2[0].en;
  }
}

updateBook();
switchLanguage('fi');



});
