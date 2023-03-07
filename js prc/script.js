// let darwinbtn=document.querySelector('button');
// darwinbtn.addEventListener('click',callme);
// function callme(){
//     alert("hey hello");
// }

// const my_obj={
//     rno:22,
//     nam:"kavya",
//     age:21,
//     work: function(){
//         console.log("solve prblms");
//     }
// }
// my_obj.work();

// var Emp=[
//     {id:401,uname:"greesh",level:4},
//     {id:402,uname:"kavya",level:5},
//     {id:411,uname:"nikhil",level:3},
//     {id:411,uname:"2",level:1}
// ]
// for(let i of Emp){
//     if(i.level>=3){
//         console.log(i["uname"])
//     }
// }
// //adding a new emp
// function addEmp(eid,ename,elevel){
//     let x=true;
//     for(let i of Emp){
//         if(i.uname==ename){
//             console.log("Emp already exists",Emp)
//             x=false;
//         }
//     }
//     if(x){
//         Emp.push({id:eid,uname:ename,level:elevel})
//         console.log("added",Emp);
//     }

// }
// //remove an exsisting emp
// function remEmp(eid){
//     for(let i =0;i<Emp.length;i++){
//         if(Emp[i].id==eid){
//             Emp.splice(i,1);
//             console.log("Deleted",Emp);
//         }
//     }
// }
// //update an existing emp
// function update(eid,ename,elevel){
//     for(let i =0;i<Emp.length;i++){
//         if(Emp[i].id==eid){
//             Emp[i].uname=ename;
//             Emp[i].level=elevel;
//             console.log("Updated",Emp);
//         }
//     }
// }
// update(402,"hema",4);
// remEmp(401);
// addEmp(400,"kav",1);
// filtEmp("2");
// //filter emps based on values
// function filtEmp(att){
//     console.log("filtered",Emp.filter(lev));
//     function lev(field){
//         if(typeof att=="number")
//             return field.level>=att;
//         else if(typeof att=="string"){
//             return field.uname==att;
//         }
//     }

// }

function titlechange(){
   
    //console.log(document.getElementsByClassName("container"));
    const title=document.getElementById("tit");
    console.log(title);
    title.innerText="Hey!there";
    return false;
    
}
