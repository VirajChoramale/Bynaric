export function ValidInput(type,name){
    if(type=="class"){
    var data=document.getElementsByClassName(name);
    var i;
    console.log(data);
     var ln=data.length
    for(i=0;i<data.length;i++){
     var id=data[i].id;
    if( data[i].value==""){
         
          SendAlert("Please filled all input field","alert alert-danger");
          setTimeout(()=>{
            SendAlert("","")
        },3000)
          return false;
    }else if(1==1){
      ValidString(data[i].value,data[i].name)
      
    } 
    else{ 
       // alert("");
    }
    }
}
else{
    
        var data= document.getElementById(name);
        
        if( data.value==""){
         
            SendAlert(data.name+" is required","alert alert-danger");

            setTimeout(()=>{
                SendAlert("","")
            },3000)
            return false;
      }else if(data.type=='text'){
        if(!ValidString(data.value,data.name)){
            return false
        }
        return true;
        
      } 

    }
    
}

export function ValidString(a,name="Valid input or filled required field"){
    var letters=/^[A-Z a-z]+$/;
    if(letters.test(a))
    {
     return true;
    }
    else{
        SendAlert("Please enter valid "+name,"alert alert-danger")
        setTimeout(()=>{
            SendAlert("","")
        },3000)
        return false; 
        
    }

}
export function ValidStd(a){
    
    if(a.length<=5)
    {
     return true;
    }
    else{
        SendAlert("Please Enter Valid Std code.","alert alert-danger")
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
        if(a==null||a==""){
            SendAlert("please fill all field(*)","alert alert-danger")
        setTimeout(()=>{
            SendAlert("","")
        },3000)
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
