
// Fetch = få tak i datax // Asynkron funksjon (async og await)
const getUser = async () => {
    const response = await fetch('https://randomuser.me/api/?results=100'); // vanlig å kalle den 'response'
    const json = await response.json(); // gjøres om til en json objekt

    const person = json.results[0];
    const tittel = person.name.title;
    const fornavn = person.name.first;
    const etternavn = person.name.last;
    const bosted = person.location.country;

    document.body.innerHTML = `
        <h1>${tittel} ${fornavn} ${etternavn} </h1>
        <img src="${person.picture.large}" alt="en person" />
        <h2>${bosted}</h2>
    `;
}

getUser();