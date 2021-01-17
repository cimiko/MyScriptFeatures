let i = 0, Tulisan;
Tulisan = `Halo Nama Saya Hartono, Git Hub: https://github.com/cimiko jangan lupa follow yah!!`

const typing = async() => {
    if (i < Tulisan.length) {
        document.getElementById("Tulisan").innerHTML += Tulisan.charAt(i);
        i++;
        setTimeout(await typing, 80);
    }
}
typing();