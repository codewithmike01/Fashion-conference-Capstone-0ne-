const ham = document.getElementById('ham-open');
const cancel = document.getElementById('cancel-ham');
const nav = document.getElementById('link-and-nav');
const speaker = document.getElementById('speak');
let check = true;
const li = document.createElement('li');
li.setAttribute('class', 'flex');
const ul = document.createElement('ul');

// function Close and OPen Ham munu
function closeOpenHam() {
  nav.classList.toggle('hide-mobile');
}

// Event Lisner for Ham and Close buttons
ham.addEventListener('click', closeOpenHam);
cancel.addEventListener('click', closeOpenHam);

// Object to store speakers
const speakersObj = {
  speakerOne: {
    name: 'John Deo',
    accomplishment: 'Well known Fashion tycoon, with blinding dress style',
    studied: 'Deo studed fashion in bakely college of fashion freaks',
    picture: './images/guestOne.jpg',
  },
  speackerTwo: {
    name: 'Albert Ishmil',
    accomplishment: 'Blazing Hot and always ready to slay aka (The ladies Man)',
    studied: 'Ishmil studied fashion in hervard university south carolina',
    picture: './images/guestTwo.jpg',
  },
  speackerThree: {
    name: 'Albert Roseline',
    accomplishment:
      'Lady boss, a two times award fahionist, with jaw dropping looks',
    studied:
      'Roseline studied fabrics design at oxford university, west London',
    picture: './images/guestThree.jpg',
  },
  speackerFour: {
    name: 'Rasheed Rehene',
    accomplishment: 'An indian fashionist and CEO of hid-Fashion Limited',
    studied: 'Rehene studied fashion in hervard university south carolina',
    picture: './images/guestFour.jpg',
  },
  speackerFive: {
    name: 'Mogile Jane',
    accomplishment: 'Number one art professional',
    studied: 'Jane studied art in hervard university, south carolina',
    picture: './images/guestFive.jpg',
  },
  speackerSix: {
    name: 'Krika Kishu',
    accomplishment: 'An indian fashionist and CEO of hid-Fashion Limited',
    studied: 'Rehene studied fashion in hervard university south carolina',
    picture: './images/guestSix.jpg',
  },
};

// LOop to dynamically produce HTML for speakers
Object.keys(speakersObj).forEach((k) => {
  const innerParentObj = speakersObj[k];
  Object.keys(innerParentObj).forEach(() => {
    if (check === true) {
      li.innerHTML = `<div class="speaker-img">
      <img src="${innerParentObj.picture}" alt="speaker John" />
    </div>
    <div class="speaker-details">
      <h3>${innerParentObj.name}</h3>
      <div class="para-speaker"></div>
      <div class="speaker-style">
        <p>${innerParentObj.accomplishment}</p>
        <div class="ssm-line"></div>
      </div>
      <p class="speaker-edu">
      ${innerParentObj.studied}
      </p>
    </div>`;
      ul.appendChild(li.cloneNode(true));
      check = false;
    }
  });
  speaker.appendChild(ul);
  check = true;
});
