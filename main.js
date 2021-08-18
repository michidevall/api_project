// h“./node_modules/axios/dist/axios.min.js”)

const get_residents = document.querySelector('button')

function clickButton() {
    console.log('click')
    axios
    .get('https://swapi.dev/api/planetss/2')
    .then(res) =>{
       let Residents = res.data.residents
       console.log(Residents)
       for(let i =0; Residents.length;i++)
          axios.get(Residents.[i]).then((res)=={
           console.log(res.data)
          let h2 = document.createElement("h2")
          h2.textContent = res.data.name
          document.body.appendChild(h2)


      })
     
      })
        
        
        
    


get_residents.adEventListener('click', clickButton)

    
