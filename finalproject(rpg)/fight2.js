function monster(stam,hit,def,exp,gold,src,n){
    this.health = stam;
    this.hit = hit;
    this.def= def;
    this.exp =exp;
    this.src = src;
    if(gold == 0)
        this.gold = Math.floor((Math.random() * 100) + 1);
    else
        this.gold = gold;
    this.name = n;

}
function fight(){
    slime =   new monster(40, 5, 2, 10, 10,'', "harmless slime");
    evilCow = new monster(50, 10, 5, 15, 12,'', "evil cow");
    evilBird = new monster(70, 15,10, 30, 40,'', "mean-looking bird");
    var stage = [slime,evilCow,evilBird];
    shrimp = new monster( 60, 20, 10, 50, 50,'', "angry shrimp");
    shark = new monster(90, 25,2,70,50,'',"menacing shark");
    octopus = new monster(90,25,0,80,60,'',"scary octopus");
    var stage1 =[shrimp,shark,octopus];
    grunt1 = new monster(150,30,30,300,90,'',"heavily armored gaurd");
    grunt2 = new monster(100,40,30,250,90,'',"long spear patrol gaurd");
    grunt3 = new monster(80,45,30,200,90,'',"swordman gaurd");
    var stage2=[grunt1, grunt2, grunt3];
    general1 = new monster(170,50,30,500,200,'',"Grand Dragooner");
    general2 = new monster(250,60,30,650,200,'',"Imperial Cavalry");
    general3 = new monster(200,70,30,500,200,'',"Mage Marshall");
    var stage3=[general1,general2,general3];
    midboss= new monster(200,80,75,1000,500,'',"Grand Chancellor Adiel ben Dvir");
boss = new monster(400,80,2000,5000,1000,'',"High King of Neto, Emperor Lodmundur Astolfursson");
$("#buttons").hide();
    var Hturn = true;
    var turn = 0;
    var index = Math.floor((Math.random() * 2));
    if(area == 0){
        var mon = stage[index];
     document.getElementById("events").style.background="url('images/field.png')";   
    }
    else if(area == 1){
     document.getElementById("events").style.background="url('images/shore.png')";   
        var mon = stage1[index];
    }
    else if(area == 2){
     document.getElementById("events").style.background="url('images/outfortress.png')";   
        var mon = stage2[index];
    }
    else if(area == 3){
     document.getElementById("events").style.background="url('images/fortress.png')";   
        var mon = stage3[index];
    }
    else if(area == 4){
     document.getElementById("events").style.background="url('images/infortress.png')";   
        var mon = midboss;
        talking();
    }
    else{
     document.getElementById("events").style.background="url('images/boss.png')";   
        var mon = boss;
        talking();
    }
    
    alert("fighting a " + mon.name );
    document.getElementById("stuff").innerHTML = "You've encountered a<b> " + mon.name +"</b><br>";
    do{
        if(Hturn == false){
            var mAttack = mon.hit + mon.hit*(Math.floor((Math.random()*20)))/100;
            health -= mAttack;
            Hturn = true;
            $("#stuff").append("<br>got hit for " + mAttack + " health now is " + health);
        }
        else if(Hturn){//hero turn
            var hAttack = hit + hit*(Math.floor((Math.random()*30)))/100;
            mon.health -= hAttack;
            $("#stuff").append("<br>hit for: " +hAttack+ " mon health: " + mon.health);
            Hturn = false;
        }
        $("#health").text(health +"/"+stam*10);
        turn++;
    if(health <= 0 || mon.health <=0){
        break;}
    }while(turn < 50);
        win(mon);
}
function win(mon){
    if(health <= 0){
        turn = 51;
        alert("you died");
        health = stam *3;
         document.getElementById("health").innerHTML ="Hp "+ health+ "/" +stam*10;
        dead = true;
        area = 0;
        town();
       
    }
    else if (mon.health <= 0){
        turn = 51;
        area++;
        gold += mon.gold;
        exp += mon.exp;
        $("#gold").text(gold);
        $("#exp").text(exp+"/"+reqExp);
        if(exp >= reqExp)
            lvlUp();
        
       $("#stuff").append( 
            "<br><b>you won!</b> <br> <button onclick='fight();'> continue?</button> "
            +"<button onclick='town();'> return to town? </button>"); 
       if(area == 6){
           window.location.replace("http://www.cs.csub.edu/~naton/notes/rpg/win.html") 
       }
       else
           alert("you won! area next is " + area);
    }
}
function foo(){
    if (skillP <= 0){
        $("#plusS").hide();
        $("#plusH").hide();
        alert("you do not have enough skill points");
        return;
    }
    //else if(skillP >0){
    else{
        $("#plusS").show();
        $("#plusH").show();

      
    }
}



function lvlUp(){
    document.getElementById("stuff").innerHTML= "<br><b>You've leveld up!</b>";
              
    lvl ++;
    exp -= reqExp;
    reqExp += reqExp/2;
    skillP += 5;
    $("#exp").text(exp+"/"+reqExp);
    $("#lvl").text(lvl);
    $("#skillpoints").text(skillP);
    $("#plusS").show();
    $("#plusH").show();
}


$(document).ready(function() {

$("#plusS").click(function(){
    if(skillP>0) {
        stam++;
        health = stam *10;
        document.getElementById("health").innerHTML ="hp "+ health+ "/" +stam*10;
        skillP--;
        $("#skillpoints").text(skillP);
        $("#stam").text(stam);
        return;
    }
    if(skillP==0) {

        $("#plusS").hide();
        
    }
});
$("#plusH").click(function(){
    if(skillP>0) {
        hit++;
        skillP--;
        $("#skillpoints").text(skillP);
        $("#hit").text(hit);
        return;
    }
    if(skillP==0) {

        $("#plusH").hide();
        
    }
});

});

