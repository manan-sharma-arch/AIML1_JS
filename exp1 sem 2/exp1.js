// function calculateresult(){
//     const n=document.getElementById("subject:").value;
//     let total=0;
//     for (let i = 0; i < n; i++) {
//         let x=parseFloat(prompt("enter the subject no"+(i+1)));
//         total+=x;
//     }
//     let avg=total/n;
//     let grade;
//     if (avg>90){
//         grade= "A+";
//     }else{
//         if(avg>80){
//             grade="B+";
//         }else{
//             if (avg>70){
//                 grade="c";
//             }else{
//                 if(avg>60){
//                     grade="D";
//                 }
//             }
//         }

//     }
//     let status;
//     if(avg>60){
//         status="pass";
//     }else{
//         status="fail";
//     }

// let result = document.getElementById("result").innerHTML = "Total Marks" + total +"<br/>" + "average" + avg.toFixed(2) + "<br/>" + "grade" + grade + "<br/>" ;
// }


function calculateResult(){
    const n = document.getElementById("subjects").value ; 
    let total = 0 ; 
    for(let i = 0 ; i < n ; i++){
        let x = parseFloat(prompt("Enter the Subject no." + (i+1))) ;
        total += x ; 

    }
    let avg = total / n ; 
    let grade ; 
    if(avg > 90){
        grade = "A+" ;
    }else{
        if(avg > 80){
            grade = "B+" ;
        }else{
            if(avg > 70){
                grade = "C+" ;
            }
            else{
                if(avg >60){
                    grade = "D+ " ;
                }
                else{
                    grade = "Khtm" ;
                }
            }
        }
    }
    let status ; 
    if(avg > 60){
        status = "PASS" ;
    }else{
        status = "FAIL" ;
    }
    let result = document.getElementById("result").innerHTML = "Total Marks : " + total +"<br/>" + "average : " + avg.toFixed(2) + "<br/>" + "grade : " + grade + "<br/>" + "Status : " + status + "<br/>";

}