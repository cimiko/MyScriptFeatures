let data = [
    {
        coy: 1,
        custname: 'PT. MUJI',
        date: '2019-03-04'
    },
    {
        coy: 1,
        custname: 'PT. CAHAYA',
        date: '2019-01-04'
    },
    {
        coy: 2,
        custname: 'PT. CAHAYA',
        date: '2019-02-08'
    },
    {
        coy: 1,
        custname: 'PT. PERTAMINA',
        date: '2019-09-22'
    },
    {
        coy: 1,
        custname: 'PT. SETAN',
        date: '2019-05-01'
    },
    {
        coy: 1,
        custname: 'PT. BABI',
        date: '2019-02-22'
    }
]




const filter = () => {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    const startDate = parseInt(start)
    const endDate = parseInt(end)

    for(i = 0; i <= data.length; i++){
        let dat1 = data[i].date;
        let sort = `${dat1.substring(0,4)}${dat1.substring(5,7)}${dat1.substring(8,10)}`
        // let thn = dat1.substring(0,4)
        // let bln = dat1.substring(5,7)
        // let hri = dat1.substring(8,10)
        const dat2 = parseInt(sort)

        if(dat2>=startDate && dat2<=endDate){

            document.write(`Coy: ${data[i].coy} <br> Custname: ${data[i].custname} <br> Date: ${data[i].date} <br> <br>`)
            
        }

        // if(startDate>=dat2 && endDate<=dat2){

        //     document.write(`Coy: ${data[i].coy} <br> Custname: ${data[i].custname} <br> Date: ${data[i].date} <br> <br>`)
            
        // }
    };
}