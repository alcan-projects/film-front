async function start(){
    const id = localStorage.getItem("saveId")
    axios.get('http://localhost:5000/films/'+id).then(res => {
        const db = res.data;
        document.getElementById('video').innerHTML = `
            <iframe src=${db.video}></iframe>
        `

        document.getElementById('description').innerHTML = db.description
    })
}
start()