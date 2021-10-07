export default async function grillhistoire(){
    const url = 'https://api.gill-cote-bistro.fr/histoires?_sort=id:asc';
    const reponse = await fetch(url);
    return reponse.json();
  }