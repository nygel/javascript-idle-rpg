var temp =0;
var text =[];
var turn=[];
var i =0;
var next = "<button id= 'con'> -> </button>";
//    document.getElementById("talk").style.backgroundSize = "700px 500px";
var backg ="";
var left ="";
var right ="";

    if(events[0] == false){    
        temp =18;
        backg ="url('http://www.cs.csub.edu/~naton/notes/rpg/images/church.png')";
        text =["Where am I?",
        "H-Huh?! who are you?! How did I get here?",
        "Calm down", 
        "Someone found your body not far from here and from the look of your wounds, you took quite the tumble",
            "Oh...",
            "Where am I?",
                "At Lunera Village, inside the church of Nodens.",
                "You are safe here, we are quite far from the frontlines.",
                    "!!!",
                    "I NEED TO GO TO THE FRONTLINES!! I MUST GO!!",
                        "Please calm down sir, you aren't quite healed yet. You'll open your wounds if you move around like that.",
                        "BUT I MUST GO!! MY FAMILY WAS KIDNAPPED BY THE NETO EMPIRE!! I NEED TO SAVE THEM!!",
                            "<i>sigh</i>",
                            "Fine if you must here is a map, but do be warned its dangerous outside of the village.",
                                "Beast roam the land and the Neto's soilders fill the empire's conqured land",
                                "That doesn't matter! I must save them! If I don't go who will save my family?",
                                    "You are a fool but go, here is your stuff found along with you.",
                                    "I wash my hands of this matter, whatever happens to you matters not to me."];
        turn =[true,true,true,false,false,true,true,false,false,true,true,false,true,false,false,false,true,false,false];
        right[0]="<img src='http://www.cs.csub.edu/~naton/notes/rpg/images/HeroC1.png'></img>";
        right[9]="<img src='http://www.cs.csub.edu/~naton/notes/rpg/images/HeroC2.png'></img>";
        left[0]="<img src='http://www.cs.csub.edu/~naton/notes/rpg/images/healer1.png'></img>";
        left[11]="<img src='http://www.cs.csub.edu/~naton/notes/rpg/images/healer2.png'></img>";
        left[13]="<img src='http://www.cs.csub.edu/~naton/notes/rpg/images/healer3.png'></img>";
    }
    else if(events[0] == true && events[1]==false){
        temp=4;
        backg="http://www.cs.csub.edu/~naton/notes/rpg/images/midboss.png"
            text =["So you are the intruder",">:(","Another fool then. It matters not, you will move no further. Oh but do beg it does make it more fun.","<button id=beg>;'>Beg for mercy?</button> or <button id= fi>Fight!!</button>"];
        $("#beg").click(function(){
            $("#dialoge").html("<i>blush</i> O-Oh I wasn't expecting that. Uh- Okay then off you go, I guess.");
            town();
        });
        $("#fi").click(function(){
            $("#dialoge").html("A true fool. Prepare to die by my blade.").delay(3000);
        $("#gam").show();
        $("#talk").hide();
        });
        turn =[false,true,false,true];
    }

function talking(){
    
    if(i == 0){//intialize speach space
        $("#gam").hide();
        $("#talk").show();
        $("#dialoge").html(next);
        document.getElementById("talk").style.backgroundImage = backg; 
    }
    if(turn[i] == true) 
        document.getElementById("dialoge").style.backgroundColor = "#2974ED"; 
    else
        document.getElementById("dialoge").style.backgroundColor = "#5429ED"; 
    $("#con").click(function(){//push forward convo
    //    alert("event 1");
        $("#dialoge").html(text[i] + "<br>" + next );
        document.getElementById("pic").innerHTML=right[i]+left[i];
        i++;
        if( i <temp)
            talking();
        else{
        if(temp = 18){events[0]=true;}
        $("#gam").show();
        $("#talk").hide();
        }
    });
}
