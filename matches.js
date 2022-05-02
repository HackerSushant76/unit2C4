// write js code here corresponding to matches.html

var matchArr= JSON.parse(localStorage.getItem('schedule'))
var favorArr= JSON.parse(localStorage.getItem('favourites')) || []

displaydata(matchArr);

document.querySelector('#filterVenue').addEventListener('change',filterbyVenfunc)
function filterbyVenfunc(){
    var selected = document.querySelector('#filterVenue').value
    
    var filteredlist= matchArr.filter(function(ele){
        return ele.Venue == selected
    })
    console.log(filteredlist)
    displaydata(filteredlist)
    
}

function displaydata(data){
    document.querySelector('tbody').innerHTML= ""

    data.forEach(function(elem){
    var tr = document.createElement('tr')

    var td1= document.createElement('td')
    td1.innerText= elem.MatchNumber

    var td2= document.createElement('td')
    td2.innerText= elem.TeamA

    var td3= document.createElement('td')
    td3.innerText= elem.TeamB

    var td4= document.createElement('td')
    td4.innerText= elem.Date

    var td5= document.createElement('td')
    td5.innerText= elem.Venue

    var td6 = document.createElement('td')
    td6.innerText= "Add as Favourites"
    td6.style.color= "green"
    td6.style.cursor= "pointer"

    td6.addEventListener('click',function(){
        favorFunc(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector('tbody').append(tr)

    })  
}

function favorFunc(elem){
    var exist= favorArr.filter(function(el){
        return el.MatchNumber ==elem.MatchNumber
    })
    if(exist.length> 0){
        alert('Already added')
    }
    else{
        favorArr.push(elem)
        alert('Added to favourites')
        localStorage.setItem('favourites',JSON.stringify(favorArr))
    }
    
}