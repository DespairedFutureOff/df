const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.contenu');
let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () =>{

        if(onglet.classList.contains('activeo')){
            return;
        }   else {
                onglet.classList.add('activeo');
        }

        index=onglet.getAttribute('data-anim');

        for(i=0; i<onglets.length; i++){

            if(onglets[i].getAttribute('data-anim')!=index){
                onglets[i].classList.remove('activeo');
            }

        }

        for(j=0;j<contenu.length; j++){

            if(contenu[j].getAttribute('data-anim') == index){
                contenu[j].classList.add('activeContenu');
            }
            else{
                contenu[j].classList.remove('activeContenu');
            }

        }

    })
})