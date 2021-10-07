
import grillhistoire from './histoire.js';
import grillspecial from './special.js';
import grillsuggestion from './suggestion.js';

async function showContent() {
  try {
    const histoire = await grillhistoire();
    console.log(histoire);
    const special = await grillspecial();
    console.log(special);
    const suggestion = await grillsuggestion();
    console.log(suggestion);
    const base_api = "https://api.gill-cote-bistro.fr";

    let firstParagraphe = document.createElement('div');
    firstParagraphe.innerHTML = histoire[0].first_paragraph;
    document.querySelector('#histoire').appendChild(firstParagraphe);
  
    for (let i = 0; i < special.length; i++) {
      let title = document.createElement('h2');
      title.textContent = special[i].title;
      let img = document.createElement('img');
      img.src = base_api + special[i].image.url;
      let description = document.createElement('p');
      description.textContent = special[i].description;
      document.querySelector('.special').append(title, img, description);
    }

    let suggest = document.createElement('h3');
    suggest.textContent = suggestion[0].suggestionsStarter;
    let suggest2 = document.createElement('p');
    suggest2.textContent = suggestion[0].suggestionsStarterPrice;
    let suggest3 = document.createElement('h3');
    suggest3.textContent = suggestion[0].suggestionsPie;
    let suggest4 = document.createElement('p');
    suggest4.textContent = suggestion[0].suggestionsPiePrice;
    let suggest5 = document.createElement('h3');
    suggest5.textContent = suggestion[0].suggestionsMain;
    let suggest6 = document.createElement('p');
    suggest6.textContent = suggestion[0].suggestionsMainPrice;
    let suggest7 = document.createElement('h3');
    suggest7.textContent = suggestion[0].suggestionsDessert;
    let suggest8 = document.createElement('p');
    suggest8.textContent = suggestion[0].suggestionsDessertPrice;
    document.querySelector('.suggestion').append(suggest, suggest2, suggest3, suggest4, suggest5, suggest6, suggest7, suggest8);
    


  } catch (e) {
    console.log('Error', e);
  }
}

showContent();