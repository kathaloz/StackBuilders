document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault()
    const plateValue = document.getElementById("inputPlate").value
    const dateValue = document.getElementById("inputDate").value
    const timeValue = document.getElementById("inputTime").value
    
    fetch('/validate', {
        method: "POST", body: JSON.stringify({
            plate: plateValue, date: dateValue, time: timeValue
        })
    }).then(res => res.json())
        .then(res => { if (res.isValid) { alert('Puede circular') } else { alert('No puede circular') } })

})