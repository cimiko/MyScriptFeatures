let data = [
    {
        coy: 1,  // Comp No
        ordtype: 1, // Order Type
        ordno: '12931',  // Order Number
        custname: 'PT. CAHAYA' // Customer Name
    },
    {
        coy: 2,
        ordtype: 1,
        ordno: '90021',
        custname: 'PT. MUJI'
    },
    {
        coy: 3,
        ordtype: 2,
        ordno: '32312',
        custname: 'PT. TIMAH'
    }
]

for (i = 0; i < data.length; i++) {
    // document.getElementById('tblData').innerHTML = `Comp No: ${data[0].coy} <br> Order Type: ${data[0].ordtype} <br> Order Number: ${data[0].ordno} <br> Customer name: ${data[0].custname}`;

    document.getElementById("test1").innerHTML += `
    <tr>
        <td>${data[i].coy}</td>
        <td>${data[i].ordtype}</td>
        <td>${data[i].ordno}</td>
        <td>${data[i].custname}</td>
    </tr>
    `
}


function tableHtmlToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    filename = filename ? filename + '.xls' : 'excel_data.xls';

    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        downloadLink.download = filename;

        downloadLink.click();
    }
}

function test(){
    new TableExport(document.getElementById("test"));
}



