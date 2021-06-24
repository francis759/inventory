let inventory=[
    {
        "category":"Phones & Tablets",
         "items":[
             {
                 "name":"Huawei Y7a",
                 "description":"Huawei Y7a -128GB HDD - 4GB RAM Smartphone - Midnight Black",
                 "quantity":10
             },
             {
                "name":"Apple iPhone X",
                "description":"iPhone X - 256GB HDD - 3GB RAM  256GB HDD Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
                "quantity":0
            },
            {
                "name":"Nokia Lumia 950",
                "description":"Lumia 950 single Nano-SIM GSM/HSDPA/LTE-A Hexa-core (4x1.4 GHz Cortex-A53 & 2x1.8 GHz Cortex-A57)",
                "quantity":30
            },
            {
               "name":"Samsung Galaxy A12",
               "description":"Samsung Galaxy A12 Dual SIM 4G LTE - 128GB HDD - 4GB RAM ",
               "quantity":15
           },
           {
            "name":"10.1'' Business Tablet with MT6582 Quad-Core Processor",
            "description":"10.1 inch high-definition screen and 1280*800 resolution, show you clear and exquisite picture, better details.",
            "quantity":0
           },
           {
             "name":"Blackberry 9720",
            "description":"Blackberry 9720 3G WiFi QWERTY 2.8 Touchscreen Smartphone 5MP Camera -- Black",
            "quantity":5
           }
         ]
    },
    {
        "category":"Home & Office",
         "items":[
             {
                 "name":"West point double door fridge",
                 "description":"West point fridge",
                 "quantity":10
             },
             {
                "name":"Nasco Air Conditioner",
                "description":"Nasco Product",
                "quantity":0
            },
            {
                "name":"Whirlpool double tub washing machine",
                "description":"Whirlpool product",
                "quantity":10
            },
            {
                "name":"Binatone fast heat iron",
                "description":"Binatone product",
                "quantity":30
            },
            {
                "name":"Philips mini rechargeable fan",
                "description":"philips product",
                "quantity":0
            }
         ]
    },
    {
        "category":"Computing",
         "items":[
             {
                 "name":"Hp pavilion 14-DC1043CL",
                 "description":"hewlett packard product",
                 "quantity":5
             },
             {
                "name":"Lenovo Ideapad 142",
                "description":"Lenovo product",
                "quantity":30
            },
            {
                "name":"Hp Laser Printer",
                "description":"hewlett packard product",
                "quantity":8
            },
            {
               "name":"Canon imageRUNNER 2425 Printer",
               "description":"The imageRUNNER C2425 is a feature rich A4 colour multifunctional device for cost conscious individuals and small workgroups, providing fast and efficient document handling ‘out of the box’. Model available exclusively in selected regions only",
               "quantity":20
           },
            {
                "name":"Samsung USB 3.1 BAR Pendrive - 64GB",
                "description":"When form and function come together and a streamlined ergonomic design with a natural feel making it easy to grip and use. You can count on Samsung BAR Plus USB 3.1 Pen drive performance and reliability to keep your data safe and accessible.",
                "quantity":0
            },
            {
               "name":"USB 3.0 External Hard Drive - 500GB",
               "description":" This product is lightweight, portable and easy to use and carry. It is made of fine quality material, long-lasting to use. With this single drive, you get compatibility with the latest USB 3.0 devices and backward compatibility with USB 2.0 devices as well. ",
               "quantity":25
           },
           {
            "name":"Apple Magic Mouse 2 - White",
            "description":"Apple Magic Mouse 2 is completely rechargeable, so you will eliminate the use of traditional batteries. It’s lighter, has fewer moving parts thanks to its built-in battery and continuous bottom shell, and has an optimized foot design all helping Magic Mouse 2 track easier and move with less resistance across your desk ",
            "quantity":0
           }
         ]
    },
    {
        "category":"Gaming",
         "items":[
             {
                 "name":"Sony PS5 Console",
                 "description":" Custom 8-core AMD Zen 2CPU",
                 "quantity":10
             },
             {
                "name":"Wireless PS4 DualShock Gamepad Controller",
                "description":"Precision controller enhanced to offer players absolute control for all games on PlayStation 4",
                "quantity":15
            },
            {
                "name":"W3D Mini Arcade Video Game Console",
                "description":"Video Game Console, 32G TF card is included, and built in 4230 classic games (150 3D games and 4080 2D games)",
                "quantity":0
            },
            {
                "name":"Microsoft Xbox Series S Console",
                "description":"Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. ",
                "quantity":8
            },
            {
                "name":"X12 Handheld Video Game Console",
                "description":"X12 handheld game console is a multifunctional game console, it can also be used as a MP3/MP4 player, such as video playing, music playing, picture viewing, e-book reading. 5.1 colorful screen ensures great visual experience. Also allowing memory of breakpoint, enabling game automatically archived to continue playing next to the direct read on the progress.",
                "quantity":16
            }
         ]
    }
];
function getPage(sender){
    let childDivs = document.getElementsByClassName('item');
    for(i=0; i<childDivs.length;i++){
        if(childDivs[i] == sender){
           childDivs[i].style.backgroundColor = "#02244b";
           childDivs[i].getElementsByTagName('div')[0].style.display = "block";
        }
        else{
            childDivs[i].style.backgroundColor = "#002b5c";
            childDivs[i].getElementsByTagName('div')[0].style.display = "none";
        }
    }
    let pages = sender.getElementsByTagName('h3');
    switch(pages[0].innerHTML){
        case "Dashboard":
            document.getElementById('page-holder').setAttribute('src','pages/dashboard.html');
            break; 
        case "Add Item":
            document.getElementById('page-holder').setAttribute('src','pages/addItem.html');
            break; 
        case "Remove Item":
                document.getElementById('page-holder').setAttribute('src','pages/removeItem.html');
                break; 
        case "Update Item":
                document.getElementById('page-holder').setAttribute('src','pages/updateItem.html');
                break; 
    }
}
function loadHome(){
    localStorage.setItem("inventory",JSON.stringify(inventory));
    let elmnts = document.getElementsByClassName('item');
    for(i=0; i<elmnts.length;i++){
        if(elmnts[i].getElementsByTagName('h3')[0].innerHTML == 'Dashboard'){
            elmnts[i].style.backgroundColor = "#02244b";
            elmnts[i].getElementsByTagName('div')[0].style.display = "block";
         }
         else{
            elmnts[i].getElementsByTagName('div')[0].style.display = "none";
         }
    }
    document.getElementById('page-holder').setAttribute('src','pages/dashboard.html')
}
function getStoreItems(){
    var quantity =0;
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    let catPanes = document.getElementsByClassName("tile-item");
    for(i=0; i< catPanes.length; i++){
        catPanes[i].getElementsByTagName('p')[0].innerHTML = inventory[i]['category'];
        for(j=0; j< inventory[i]['items'].length; j++){
            quantity+= inventory[i]['items'][j]['quantity'];
        }
        catPanes[i].getElementsByTagName('h3')[0].innerHTML = quantity;
        quantity = 0;
    }
    //
    var counter = 1;
    var table = document.getElementById("items-table");
    for(i = 0 ; i< inventory.length; i++){
        for(j=0; j< inventory[i]['items'].length; j++){
            var row = table.insertRow();
            if(counter%2===0)
                row.style.backgroundColor = "#ccc";

            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();
            var cell5 = row.insertCell();
            var cell6 = row.insertCell();
            cell1.innerHTML = counter++;
            cell2.innerHTML = inventory[i]['items'][j]['name'];
            cell3.innerHTML = inventory[i]['items'][j]['description'];
            cell4.innerHTML =  inventory[i]['category'];
            cell5.innerHTML = inventory[i]['items'][j]['quantity']
            if(parseInt(cell5.innerHTML) === 0){
                cell6.style.backgroundColor = "red";
                cell6.innerHTML = "Out of stock";
            } 
            else if(parseInt(cell5.innerHTML) <= 20 && parseInt(cell5.innerHTML)>= 1){
                cell6.style.backgroundColor = "yellow";
                cell6.innerHTML = "Almost of stock";
            }
            else if(parseInt(cell5.innerHTML) >= 25){
                cell6.style.backgroundColor = "green";
                cell6.innerHTML = "In Stock";
            }
            
        }
    }
}
function closeNotification(sender){
    let elmntParent = sender.parentElement;
    elmntParent.style.display = "none";
}
function showAddItemPopUp(){
    document.getElementsByClassName('Add-item-modal')[0].style.display = "block";
}
function closeAddItemPopUp(){
    document.getElementsByClassName('Add-item-modal')[0].style.display = "none";
}
function populateComboBox(sender){
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    for(i=0; i<inventory.length; i++){
        var opt = document.createElement('option');
        opt.innerHTML = inventory[i]['category'];
        opt.value = inventory[i]['category'];
        document.getElementById(sender).appendChild(opt);  
    }
}
function saveItem(){
    var itemName = document.getElementById('namelbl').value;
    var itemCategory = document.getElementById('categoriesHolder1').value;
    var itemDescription = document.getElementById('descriptionlbl').value;
    var itemQuantity = document.getElementById('quantitylbl').value;
    //
    if(itemName === ""){
        window.alert("Please enter item name");
    }
    if(itemName === "" && itemQuantity === ""){
        window.alert("Please enter item name and quantity");
    }
    if(itemQuantity === ""){
        window.alert("Please enter item name and quantity");
    }
    else{
        if(itemName !== "" && itemQuantity !== ""){
            let inventory = JSON.parse(localStorage.getItem("inventory"));
            for(i=0; i<inventory.length; i++){
                if(inventory[i]['category'] === itemCategory){
                    var item = {
                        "name":itemName,
                        "description":itemDescription,
                        "quantity":parseInt(itemQuantity)
                    };
                    inventory[i]['items'].push(item);
                    localStorage.setItem('inventory',JSON.stringify(inventory));
                    document.getElementsByClassName('Add-item-modal')[0].style.display = "none";
                    document.getElementById('itemAddedMsg').style.display = "flex";
                }
            }
        }
    }
}

function removeItemPopulate(sender){
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    let table = document.getElementById('removeItemsTable');
    var noRows = table.rows.length;
    if(noRows >= 1){
        for(k=0; k < noRows; k++){
            table.deleteRow(noRows -1);
        }
    }
    for(i=0; i< inventory.length; i++){
        if(sender.value === inventory[i]['category']){
           for(j=0; j<inventory[i]['items'].length; j++){
               var row = table.insertRow();
               var cell = row.insertCell();
               cell.innerHTML = inventory[i]['items'][j]['name'];
           }
        }
    }
}