import retrieveContent from './query.js';

const url = 'https://api.gill-cote-bistro.fr/';
async function showContent() {
  try {
    const content = await retrieveContent();

    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);

    fetch(url + 'specials?_sort=id:asc')
    .then((resp) => resp.json())
    .then(function(data){
      console.log(data)
    })
    
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();