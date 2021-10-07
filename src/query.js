export default async function retrieveContent() {
    const url = "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1";
    const response = await fetch(url);
    return response.json();
}
  
export default async function grill(){
  const url = 'https://api.gill-cote-bistro.fr/specials?_sort=id:asc';
  const reponse = await fetch(url);
  return reponse.json();
}

export default async function grill(){
  const url = 'https://api.gill-cote-bistro.fr/suggestions?_sort=id:asc';
  const reponse = await fetch(url);
  return reponse.json();
}

export default async function grill(){
  const url = 'https://api.gill-cote-bistro.fr/histoires?_sort=id:asc';
  const reponse = await fetch(url);
  return reponse.json();
}