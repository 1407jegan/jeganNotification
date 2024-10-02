document.addEventListener('DOMContentLoaded', function () {
    let read = false

    document.getElementById('markRead').addEventListener('click', function () {
        let dotEl = document.getElementsByTagName('h6');
        let readEl = document.getElementsByTagName('li');
        
        read = true
        console.log(read)
        if (read) {
            console.log('read')
            for (let i = 0; i < dotEl.length; i++) {
                dotEl[i].style.display = 'none';
            }
            for(let i = 0; i<readEl.length; i++){
                readEl[i].classList.remove('not-read');
                readEl[i].classList.add('read-con')
            }
        }
    })

})

