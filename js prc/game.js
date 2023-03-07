function myfun(z,id){
    
    if(count%2){
        if(arr[z]==0){
            arr[z]=1;
        console.log(id);
        var c=document.getElementById(id);
        c.style.backgroundColor="blue"
        }
        else{
            count--;
        }
        // c.getElementsByTagName("img")[0].src="x.png";
    }
    else{
        if(arr[z]==0){
            arr[z]=2;
        var c=document.getElementById(id);
        c.style.backgroundColor="red"
        }
        else{
            count--;
        }
        
    }
    if((arr[0]==1 && arr[1]==1 && arr[2]==1) || (arr[3]==1 && arr[4]==1 && arr[5]==1) || (arr[6]==1 && arr[7]==1 && arr[8]==1) ||
    (arr[0]==1 && arr[3]==1 && arr[6]==1) || (arr[1]==1 && arr[4]==1 && arr[7]==1) || (arr[2]==1 && arr[5]==1 && arr[8]==1) || 
    (arr[0]==1 && arr[4]==1 && arr[8]==1) || (arr[2]==1 && arr[4]==1 && arr[6]==1)){
                s1++;
                document.getElementById("p1").innerText=s1;
                count=0;
                for(let i=0;i<9;i++){
                    arr[i]=0;
                    document.getElementById("b"+i).style.backgroundColor="white";
                }
    }
    else if((arr[0]==2 && arr[1]==2 && arr[2]==2) || (arr[3]==2 && arr[4]==2 && arr[5]==2) || (arr[6]==2 && arr[7]==2 && arr[8]==2) ||
    (arr[0]==2 && arr[3]==2 && arr[6]==2) || (arr[1]==2 && arr[4]==2 && arr[7]==2) || (arr[2]==2 && arr[5]==2 && arr[8]==2)||
    (arr[0]==2 && arr[4]==2 && arr[8]==2) || (arr[2]==2 && arr[4]==2 && arr[6]==2)){
                s2++;
                count=0;
                document.getElementById("p2").innerText=s2;
                for(let i=0;i<9;i++){
                    arr[i]=0;
                    document.getElementById("b"+i).style.backgroundColor="white";
                }
               
    }
    else if(count>8){
        count=0;
        for(let i=0;i<9;i++){
            arr[i]=0;
            document.getElementById("b"+i).style.backgroundColor="white";
        }
    }
}


var count=0;
var arr=[0,0,0,0,0,0,0,0,0];
var s1=0,s2=0;


function abc(e){
    count++;
    console.log(e[1],count);
    myfun(e[1],e)
}
