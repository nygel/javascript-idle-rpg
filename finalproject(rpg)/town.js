
function town(){
    area = 0;
    $("#buttons").show();
    $("#buttons").html(
            "<h2>Town</h2>"
            +"<button  onclick='inn();'>Inn</button>"
            +"<button  onclick='shop();'>Shop</button>"
            +"<button  onclick='fight();'>Leave</button>" );
    document.getElementById("events").style.backgroundImage= "url('http://www.cs.csub.edu/~naton/notes/rpg/images/town.png ')";
    if(dead == true){
        //change to church background
        document.getElementById("stuff").innerHTML = "<h2>Church</h2>";
        document.getElementById("events").style.backgroundImage= "url('http://www.cs.csub.edu/~naton/notes/rpg/images/churche.png ')";
        dead = false;
    }
}
var store = [
    "<button id = s1> low potion  10g</button>",
    "<button id = s2> medium potion 30g</button>",
    "<button id = s3> high potion 60g</button>",
    "<button id = s4> complete potion 100g</button>",

];
function useP(effect,index,name){
    items[index]--;
    if((health + effect) > stam*10){health = stam*10;}
    else{health += effect;}
    var id = index+1;
    $("#health").text(health +"/"+stam*10);
    if(items[index] == 0){
        $("#"+id).hide();
        $("#p"+id).hide();
    }
    else
        $("#"+id).text(name + " X" + items[index]);
}
function shop(){
    //change to shop background
    document.getElementById("events").style.backgroundImage= "url('http://www.cs.csub.edu/~naton/notes/rpg/images/shop.5.png') ";
    $("#stuff").html( store);
    $("#s1").click(function(){
        if((gold-10) < 0)
            alert("you can't afford to buy it");
        else{
            gold -= 10;
            items[0]++;
            $("#gold").text(gold);
            $("#1").show();
            $("#1").text("low potion X"+ items[0]);
            $("#p1").show();
        }
    });
    $("#s2").click(function(){
        if((gold-30) < 0)
            alert("you can't afford to buy it");
        else{
            gold -= 30;
            items[1]++;
            $("#gold").text(gold);
            $("#2").show();
            $("#2").text("medium potion X"+ items[1]);
            $("#p2").show();
        }
    });
    $("#s3").click(function(){
        if((gold-60) < 0)
            alert("you can't afford to buy it");
        else{
            gold -= 60;
            items[2]++;
            $("#gold").text(gold);
            $("#3").show();
            $("#3").text("high potion X"+ items[2]);
            $("#p3").show();
        }
    });
    $("#s4").click(function(){
        if((gold-100) < 0)
            alert("you can't afford to buy it");
        else{
            gold -= 100;
            items[3]++;
            $("#gold").text(gold);
            $("#4").show();
            $("#4").text("complete potion X"+ items[3]);
            $("#p4").show();
        }
    });
}

function inn(){
    //change to Inn background
    document.getElementById("events").style.backgroundImage= "url('http://www.cs.csub.edu/~naton/notes/rpg/images/inn2.png') ";
    document.getElementById("stuff").innerHTML =
        " <h2>Inn</h2>"+
        "<br>"+
        "<button onclick = buy('inn',30,0); >Rent Room 30g </button> ";
}

function buy(type,cost,thing){
    if((gold-cost) <=0){
        alert("not enough funds");
    }
    else{
        gold -=cost;
        if(type == "equipment"){
            alert("bought equipment/ not implemented yet");
        }
        else if(type == "inn"){
            health = stam *10;
            document.getElementById("health").innerHTML = health + "/ " + health;
        }
        document.getElementById("gold").innerHTML = gold; 
    }  
}


