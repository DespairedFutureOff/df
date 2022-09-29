let searchable=[
    'Aiden Baker',
    'Achill Von Wunderbar',
    'Marc Dubois',
    'Arya Diavolo',
    'Bernhard Wheel',
    'Foxtrot',
    'Krysto',
    'Joachim Allard',
    'Alphonse Baker',
    'Emilie Baker',

];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup',()=> {
    let results = [];
    let input = searchInput.value;
    if(input.length){
        results=searchable.filter((item)=>{
            return item.toLowerCase().includes(input.toLowerCase());
        });
    }

    renderResults(results);

});

function renderResults(results){
    if(!results.length){
        return searchWrapper.classList.remove('show');
    }

    let content= results.map((item)=>{
        return `<li class="résultatspls"><a href='personnages/${item.ah}'>${item.nom}</a></li>`
    }).join('');

    searchWrapper.classList.add('show')
    resultsWrapper.innerHTML=`<ul>${content}</ul>`;
}