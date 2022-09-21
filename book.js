function addbook(){
    let name = document.getElementById("name").value;
    let desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    data = {
        "name":name,
        "desc":desc,
        "price":price
    }
    console.log("adding..",data)
    book(data)
    showItems()
}
function deleteItem(index){
    console.log(index)
    let lsitems = JSON.parse(localStorage.getItem("items"))
    if(lsitems==null){
        let lsitem = []
        localStorage.setItem("items",JSON.stringify(lsitem))
    }
    else{
        lsitems.splice(index,1)
        localStorage.setItem("items",JSON.stringify(lsitems))
    }
    showItems()
}
function book(item){
    let lsitems = JSON.parse(localStorage.getItem("items"))
    if(lsitems==null){
        let lsitem = []
        localStorage.setItem("items",JSON.stringify(lsitem))
    }
    else{
        lsitems.push(item)
        localStorage.setItem("items",JSON.stringify(lsitems))
    }
}
function showItems(){
    let lsitems = JSON.parse(localStorage.getItem("items"))
    if(lsitems===null){
        let lsitem = []
        localStorage.setItem("items",JSON.stringify(lsitem))
        document.getElementById("showItems").innerHTML = "No Books yet,So please add books here....!"
    }
    else{
        let html = ``;
        lsitems.forEach((item,index) => {
            html = html + `<div class="item">
            <h4>${index+1}</h4>
            <h2>${item.name}</h2>
            <p>${item.desc}</p>
            <h2>${item.price}</h2>
            <button onclick="deleteItem(${index})">Delete</button>
            </div>`
        });
        document.getElementById("showItems").innerHTML = html
    }
}
showItems()