
var Hero = [stam = 10,def = 10,hit =10,Hexp = 0];
var HHp = Hero[0] *10;
var Hgold = 10;
var stage =0;
var lvl = 1;
var reqExp = 100;
var dead = false;
var ptotal=0;
function Start(){
    //setting u in town
    document.getElementById("buttons").style.visiblity = "hidden";
    document.getElementById("start").style.visiblity = "hidden";
    //    document.getElementById("field").style.visibility = "collapse"
    //        document.getElementById("town").style.visiblity = "visible";
    //showing all stats
    document.getElementById("health").innerHTML ="Hp"+ HHp+ "/" +Hero[0]*10;
    document.getElementById("name").innerHTML ="Name: "+"ButtStuff"; 
    document.getElementById("stam").innerHTML = "Stam: " +Hero[0] ;
    document.getElementById("hit").innerHTML ="Hit: " +Hero[2] ;
    document.getElementById("def").innerHTML ="Def: " +Hero[1] ;
    document.getElementById("exp").innerHTML ="Exp: " +Hero[3]+ "/" + reqExp;
    document.getElementById("gold").innerHTML =Hgold;
    document.getElementById("lvl").innerHTML =lvl ;
    document.getElementById("potion").innerHTML =ptotal ;
    town();
}
function monster(stam,hit,def,exp,gold,src,num){
    this.health = stam;
    this.hit = hit;
    this.def= def;
    this.exp =exp;
    this.src = src;
    if(gold == 0)
        this.gold = Math.floor((Math.random() * 100) + 1);
    else
        this.gold = gold;
    this.num = num;
 //   this.stage = stage;
}
slime =   new monster(50, 10, 2, 10, 10,'',1);
evilCow = new monster(70, 30, 5, 15, 12,'',2);
evilCat = new monster(60, 50,10, 30, 40,'',3);
var stage0= [slime,evilCow,evilCat];

function field(){
    //set action box
    document.getElementById("events").style.backgroundImage="url('http://www.cs.csub.edu/~naton/notes/rpg/images/forest.png')";
    document.getElementById("buttons").innerHTML = 
        "<h2>Field</h2>"      
        +"<button href='#' id='attack' onclick='fight(MHp);'>attack</button>"
        +"<button href='#' id='items' onclick='items();'>item</button>";
    
    document.getElementById("stuff").innerHTML = " ";
    var index = Math.floor(Math.random() * 3);
    var monster = stage0[index];
    var Hturn = true;
    alert("mon hp: " +monster.health 
          + "attack: " + monster.hit 
          + "gold: "+ monster.gold 
          + "exp: " + monster.exp);
    do{
        //moster attack with a timer so hero can do actions
        setTimeout(
            if(Hturn == false){
            Mdamage = monster.hit + ((Math.floor((Math.random() * 10)))/10);
            HHp -= Mdamage;
            document.getElementById("health").innerHTML ="Hp"+ HHp+ "/" +Hero[0]*10;
            alert("took " + Mdamage + " damage");
            Hturn = true;
        }
        ,3000);
        else{
            Hdamage = (Math.floor((Math.random() * Hero[2] + 1)+1))*10;
            monster.health -= Hdamage;
            alert("did " + Hdamage + " damage " + monster.health );
            Hturn = false;
        }
    }while(MHp >=0 && HHp >=0);
    //you died
    if(HHp <=0 ){
        alert("you died; returning to town");
        HHp = Hero[0]*5;
        Hgold = 0;
        stage = 0;
        document.getElementById("gold").innerHTML =Hgold;
        document.getElementById("health").innerHTML ="Hp"+ HHp+ "/" +Hero[0]*10;
        town();
    }
    //you win
    else{
        Hero[3] += Mexp;
        gold+= Mgold;
        stage ++;
        lvlUp();
    document.getElementById("exp").innerHTML ="Exp: " +Hero[3]+ "/" + reqExp;
    document.getElementById("gold").innerHTML =Hgold;
    document.getElementById("lvl").innerHTML =lvl ;
        town();
    }
}
function items(){
    //put avalible consumables on stuff and buttons to use it
    if(ptotal > 0)
        document.getElementById("stuff").innerHTML = "<button onclick='use(HHp,20);'> potion </button>";
    else 
        document.getElementById("stuff").innerHTML = "Empty";
    Hturn = false;
}
function use(where,effect){
    where += effect;
    if( where == "HHp")
        document.getElementById("health").innerHTML = HHp;
}
function lvlUp(){
    if(reqExp <= Hero[3]){
        Hero[3] -=reqExp;
        lvl++;
        HHp = Hero[0] * 10;
        reqExp += lvl*10;
    }
    document.getElementById("exp").innerHTML ="Exp: " +Hero[3]+ "/" + reqExp;
}
