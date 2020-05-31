import parse from 'csv-parse';
var referenceList;

function getReferences() {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR9sTN1fH-bYTSRvbJkLgxrsneP4ZpNlwuk59x_OoDJI6NU_R_vl5GnTpMIfMrBr0zyjx_4u4h_HFvn/pub?gid=0&single=true&output=csv")
        .then(res => {
            return res.text()
        })
        .then(body => {
            parse(body, { columns: true }, function (err, data) {
                console.log(data)
                data.forEach(row => {
                    const li = document.createElement('li')
                    li.innerHTML = `
                    <span class='row-title'>${row.Title}</span>
                    <span class='row-date'>${row.Date}</span>
                    <span class='row-location'>${row.Location}</span>
                    <span class='row-name'>${row.Name}</span>
                    <span class='row-link'>${row.Link}</span>
                    <span class='row-tags'>${row["#"]}</span>
                    `

                    li.classList.add('references-row')
                    referenceList.appendChild(li)
                })
            })
        })

}


window.addEventListener('DOMContentLoaded', () => {
    referenceList = document.querySelector('.references')
    console.log(referenceList)
    if (referenceList) {
        getReferences()
    }
})