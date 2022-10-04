async function start(){
    const id = localStorage.getItem("saveId")
    axios.get('http://157.230.91.29:5000/films/'+id).then(res => {
        const db = res.data;
        document.getElementById('video').innerHTML = `
            <iframe src=${db.video}></iframe>
        `

        document.getElementById('description').innerHTML = db.description
    })
}
start()