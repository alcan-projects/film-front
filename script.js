async function start(){
    axios.get('http://localhost:5000/films').then(res => {
        const db = res.data;
        for(let i = 0; i < db.length; i++){
            document.getElementById('list').innerHTML += `
            <div class="boxed" onclick="saveId('${db[i]._id}')">
                <a href="/film">
                    <img 
                        src=${db[i].image} 
                        alt="Capo do filme ${db[i].name} no dia ${new Date()}">
                    <p>${db[i].name}</p>
                </div>
            </div>
            `
        }
    })
}
start()

function saveId(id){
    localStorage.setItem('saveId', id)
}