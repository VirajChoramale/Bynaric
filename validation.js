 alert("loaded")


export function ValidString(a){
    var letters=/^[A-Za-z]+$/;
    if(letters.test(a))
    {
     return true;
    }
    else{
        SendAlert("Please Enter Valid Name.","alert alert-danger")
        setTimeout(()=>{
            SendAlert("","")
        },3000)
        return false; 
        
    }

}
export function ValidPin(a){
            
   
        if(a.length<=6&&a>=11111)
        {
         return true;
        }
        else{
            SendAlert("invalid Pin no.","alert alert-danger")
        setTimeout(()=>{
            SendAlert("","")
        },3000)
        return false;
            
       
    }
    
}
export function ValidMobNo(a){
    
    var numberss=/^[6-9]\d{9}$/gi;
    if(numberss.test(a))
    {
     return true;
    }
    else{
        SendAlert("invalid mobile no.","alert alert-danger")
        setTimeout(()=>{
            SendAlert("","")
        },3000)
        return false;
    }
}
export function ValidLandLine(a){
    var numberss=/\d{6}/;

    
    if(numberss.test(a))
    {
     return true;
    }
    else{
        SendAlert("invalid LandLine no.","alert alert-danger")
        setTimeout(()=>{
            SendAlert("","")
        },3000)
        return false; 
}


}
export function CheckNull(a){
    alert("indf");
        if(a==null){
            return false;
        }
        else{
            return true;
        }


}
export function ValidPanNo(a){
    var letters=/^[A-Za-z1-9]+$/;
    if(letters.test(a))
    {
     return true;
    }
    else{
        SendAlert("Please Enter Valid PanNo.","alert alert-danger")
        setTimeout(()=>{
            SendAlert("","")
        },3000)
        return false; 
        
    }
}
export function SendAlert(msg,type){
  document.getElementById("alertBox").className=type;
  document.getElementById("alert-msg").innerHTML=msg;

    
  }
