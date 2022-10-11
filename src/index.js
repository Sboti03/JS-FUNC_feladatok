class Szazlabu {
    constructor(labakSzama) {
        this.labakSzama = labakSzama;
    }

    toString() {
        return this.labakSzama + " lábú százlábú"
    }

    labakbolSzazlabuk(t) {
        
        let szalabuTomb = []
        // Tiszta
        t.forEach((e) => {
            szalabuTomb.push(new Szazlabu(e))
        });
        return szalabuTomb;
    }

    
    szazlabuMejelenites(id, t) {
        let kiirasTomb = this.labakbolSzazlabuk(t).toString().split(',')
        let div = document.createElement('div')
        kiirasTomb.forEach((e)=> {
            let p = document.createElement('p')
            p.textContent = e
            div.appendChild(p)
        })
        document.getElementById(id).appendChild(div)
    }
}

document.addEventListener('DOMContentLoaded', ()=> {

    let t = Array.from({length: 20})
    
    t.forEach((e, index) => {
        t[index] = Math.floor(Math.random() * 30 + 1);
    });

    console.log('Tömb elemei')
    console.log(t)

    // Tiszta
    let ujtomb = []
    t.forEach((e) => {
        if(e % 5 == 0) {
            ujtomb.push(e);
        }
    });

    console.log('5-el osztható')
    console.log(ujtomb)


    document.getElementById('sort-btn').addEventListener('click', () => {
        t = t.sort((a,b) => a-b)
        console.log('rendezett')
        console.log(t)
    });


    document.getElementById('szam-btn').addEventListener('click', ()=> {
        t.push(parseInt(document.getElementById('szam').value))
        console.log('Új tömb')
        console.log(t)
    });

    new Szazlabu().szazlabuMejelenites('szaz', [12, 23, 32, 232])
});





