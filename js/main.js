var myList = [];
var myHttp = new XMLHttpRequest();
myHttp.open("GET" , "https://api.themoviedb.org/3/trending/all/day?api_key=f8da90800ac06cd2e52f7c328051a6cd");
myHttp.send();
myHttp.addEventListener("readystatechange" , function(){
    if(myHttp.readyState == 4 && myHttp.status == 200) 
    {
        myList = JSON.parse(myHttp.response).results;
        displayMovies();

    }
})
function displayMovies()
{
    cartoona=``
    for(var i=0;i<myList.length;i++)
    {
        cartoona+=` <div class="col-md-4">
        <div class="item">
            <img src="https://image.tmdb.org/t/p/w500${myList[i].poster_path}" class="w-100" alt="">
            <h3>${myList[i].original_title}</h3>
            <p>${myList[i].overview}</p>
        </div>
    </div>`
    }
    document.getElementById('rowData').innerHTML = cartoona ; 
}