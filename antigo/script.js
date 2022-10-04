async function start(){
    axios.get('http://157.230.91.29:5000/films').then(res => {
        const db = res.data;
        for(let i = 0; i < db.length; i++){
            document.getElementById('list').innerHTML += `
            <div class="boxed">
                <a href="/film/${db[i]._id}">
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