
window.onload = function() {
  
   let box = ['box11', 'box12', 'box13', 'box14','box21', 'box22', 'box23', 'box24','box31', 'box32', 'box33', 'box34','box41', 'box42', 'box43', 'box44' ];
   let k=0;
   for(k=0;k<box.length;k++)
   {
     let b= document.getElementById(box[k]);
     b.innerHTML=" ";
    b.style.backgroundColor = "#aaa";
    
   }
   
   let r1=Math.floor((Math.random() * 15) + 1);
   let elem= document.getElementById(box[r1]);
   let rand24=Math.floor((Math.random() * 10) + 1);
   if(rand24<6){
      elem.innerHTML="2";
      elem.style.backgroundColor="#fa0"
   }
     else
   {
       elem.innerHTML="4";
      elem.style.backgroundColor="#f80"
   }
   
   while(1)
   {
   let r2=Math.floor((Math.random() * 15) + 1);
   let elem1= document.getElementById(box[r2 ]);
   if(elem1.textContent==" "){
   
       let rand241=Math.floor((Math.random() * 10) + 1);
       if(rand24<5){
      elem1.innerHTML="2";
      elem1.style.backgroundColor="#fa0";
      }
     else
      {
       elem1.innerHTML="4";
      elem1.style.backgroundColor="#f80";
      }
      break;
   
     }
   }
   
   function boxitem()
   
     {
       let arr= new Array();
       let i =0
       for(;i<=15;i++)
       {
          let e= document.getElementById(box[i]); 
           let lo= e.innerHTML;
          if(lo==" ")
          {
           arr[i]=0;
          }
          else
          {
           let a = parseInt(lo);
           arr[i]=a;
          }
       }
       return arr;
   
     }
   
         function colour()
        {
             let i=0;
             let ec= document.getElementById(box[i]); 
             for(;i<=15;i++)
             {
               let ec = document.getElementById(box[i]); 
                  if(ec.textContent==" "){
                   ec.style.backgroundColor = "#aaa";
                  }   
                 else if (ec.textContent=="2") {
                   ec.style.backgroundColor="#fa0";
                 }
                 else if (ec.textContent=="4") {
                   ec.style.backgroundColor="#f80";
                 }
                  else if (ec.textContent=="8") {
                   ec.style.backgroundColor="#f65";
                 }
                  else if (ec.textContent=="16") {
                   ec.style.backgroundColor="#f55";
                 }
   
                 else if (ec.textContent=="32") {
                   ec.style.backgroundColor="#f45";
                 }
                 else if (ec.textContent=="64") {
                   ec.style.backgroundColor="#f35";
                 }
                 else if (ec.textContent=="128") {
                   ec.style.backgroundColor="#f25";
                 }
                 else if (ec.textContent=="256") {
                   ec.style.backgroundColor="#f15";
                 }
                 else if (ec.textContent=="512") {
                   ec.style.backgroundColor="#f05";
                 }
   
                 else if (ec.textContent=="1024") {
                   ec.style.backgroundColor="#e00";
                 }
                 else if (ec.textContent=="2048") {
                   ec.style.backgroundColor="#d00";
                 }
                 else
                 {
                  ec.style.backgroundColor="#d00"; 
                 }
   
             }
   
        }
   
        function myup()
   
        {
           let arr= new Array();
           arr=boxitem();
   
           let i=0;
           let j=0;
           let l=0;
   
           for( j=3;j>=0;j--){
                           
                       for( l=j;l<=j+12;l=l+4){
                       for( i=j;i<j+12;i=i+4){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i+4];
                                  
                                  arr[i+4]=0;
                                   
                               }}}}
   
   
   
                               for( j=3;j>=0;j--){
                           
                       for( l=j;l<=j+12;l=l+4){
                       for( i=j;i<j+12;i=i+4){
                       
                       if(( arr[i]==arr[i+4])&&(arr[i]!=0))
                               {
                               let  u=arr[i];
                                    u=2*u;
                                    
                                    
                                     arr[i]=u;
                                  arr[i+4]=0;
                                   
                               }}}}
   
   
   
           for( j=3;j>=0;j--){
                           
                       for( l=j;l<=j+12;l=l+4){
                       for( i=j;i<j+12;i=i+4){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i+4];
                                  
                                  arr[i+4]=0;
                                   
                               }}}}
   
   
                               while(1)
   
                               {
                                  let ra=Math.floor((Math.random() * 15) + 1);
                                  if(arr[ra]==0)
                                  { 
                                       let rand=Math.floor((Math.random() * 10) + 1);
                                        if(rand<5){
                                        arr[ra]=2;
                                       
                                          }
                                        else
                                          {
                                           arr[ra]=4;
                                           
                                            }
   
                                            break;
   
                                  }
   
                               }
   
                               let a=0;
                               for(a=0;a<=15;a++)
   
                               {
                                 let eb= document.getElementById(box[a]);
                                 if(arr[a]==0)
                                 {
                                  eb.innerHTML=" ";
                                  }
                                  else{
                                   eb.innerHTML=arr[a];
                                  }
                               }
   
                               colour();
   
        }
         function mydown()
   
        {
           let arr= new Array();
           arr=boxitem();
   
           let i=0;
           let j=0;
           let l=0;
   
           
                       for( j=15;j>=12;j--){
                           
                       for( l=j;l>=j-12;l=l-4){
                       for( i=j;i>j-12;i=i-4){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i-4];
                                  
                                  arr[i-4]=0;
                                   
                               }}}}
   
   
    
                       for( j=15;j>=12;j--){
                           
                       for( l=j;l>=j-12;l=l-4){
                       for( i=j;i>j-12;i=i-4){
                       
                       if(( arr[i]==arr[i-4])&&(arr[i]!=0))
                               {
                               var  u=arr[i];
                                    u=2*u;
                                    
                                    
                                     arr[i]=u;
                                  arr[i-4]=0;
                                   
                               }}}}
   
   
   
                       for( j=15;j>=12;j--){
                           
                       for( l=j;l>=j-12;l=l-4){
                       for( i=j;i>j-12;i=i-4){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i-4];
                                  
                                  arr[i-4]=0;
                                   
                               }}}}
   
                               while(1)
   
                               {
                                  let ra=Math.floor((Math.random() * 15) + 1);
                                  if(arr[ra]==0)
                                  { 
                                       let rand=Math.floor((Math.random() * 10) + 1);
                                        if(rand<5){
                                        arr[ra]=2;
                                       
                                          }
                                        else
                                          {
                                           arr[ra]=4;
                                           
                                            }
   
                                            break;
   
                                  }
   
                               }
   
                               let a=0;
                               for(a=0;a<=15;a++)
   
                               {
                                 let eb= document.getElementById(box[a]);
                                 if(arr[a]==0)
                                 {
                                  eb.innerHTML=" ";
                                  }
                                  else{
                                   eb.innerHTML=arr[a];
                                  }
                               }
   
                               colour();
   
        }
   
        function myleft()
   
        {
           let arr= new Array();
           arr=boxitem();
   
           let i=0;
           let j=0;
           let l=0;
   
           
                       for( j=12;j>=0;j=j-4){
                       for( l=j;l<j+3;l++){
                       for( i=j;i<j+3;i++){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i+1];
                                  
                                  arr[i+1]=0;
                                   
                               }}}}
   
   
                      for( j=12;j>=0;j=j-4){
                       for( l=j;l<j+3;l++){
                       for( i=j;i<j+3;i++){
                       
                       if(( arr[i]==arr[i+1])&&(arr[i]!=0))
                               {
                               let  u=arr[i];
                                    u=2*u;
                                    
                                    
                                     arr[i]=u;
                                  arr[i+1]=0;
                                   
                               }}}}
   
   
                       for( j=12;j>=0;j=j-4){
                       for( l=j;l<j+3;l++){
                       for( i=j;i<j+3;i++){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i+1];
                                  
                                  arr[i+1]=0;
                                   
                               }}}}
   
                               while(1)
   
                               {
                                  let ra=Math.floor((Math.random() * 15) + 1);
                                  if(arr[ra]==0)
                                  { 
                                       let rand=Math.floor((Math.random() * 10) + 1);
                                        if(rand<5){
                                        arr[ra]=2;
                                       
                                          }
                                        else
                                          {
                                           arr[ra]=4;
                                           
                                            }
   
                                            break;
   
                                  }
   
                               }
   
                               let a=0;
                               for(a=0;a<=15;a++)
   
                               {
                                 let eb= document.getElementById(box[a]);
                                 if(arr[a]==0)
                                 {
                                  eb.innerHTML=" ";
                                  }
                                  else{
                                   eb.innerHTML=arr[a];
                                  }
                               }
   
                               colour();
   
        }
   
        function myright()
   
        {
           let arr= new Array();
           arr=boxitem();
   
           let i=0;
           let j=0;
           let l=0;
   
           
                        for( j=15;j>=3;j=j-4){
                       for( l=j;l>j-3;l--){
                       for( i=j;i>j-3;i--){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i-1];
                                  
                                  arr[i-1]=0;
                                   
                               }}}}
   
   
                      for( j=15;j>=3;j=j-4){
                       for( l=j;l>j-3;l--){
                       for( i=j;i>j-3;i--){
                       
                       if(( arr[i]==arr[i-1])&&(arr[i]!=0))
                               {
                               let  u=arr[i];
                                    u=2*u;
                                    
                                    
                                     arr[i]=u;
                                  arr[i-1]=0;
                                   
                               }}}}
   
   
                        for( j=15;j>=3;j=j-4){
                       for( l=j;l>j-3;l--){
                       for( i=j;i>j-3;i--){
                       
                       if(arr[i]==0)
                               {
                                  arr[i]=arr[i-1];
                                  
                                  arr[i-1]=0;
                                   
                               }}}}
   
                               while(1)
   
                               {
                                  let ra=Math.floor((Math.random() * 15) + 1);
                                  if(arr[ra]==0)
                                  { 
                                       let rand=Math.floor((Math.random() * 10) + 1);
                                        if(rand<5){
                                        arr[ra]=2;
                                       
                                          }
                                        else
                                          {
                                           arr[ra]=4;
                                           
                                            }
   
                                            break;
   
                                  }
   
                               }
   
                               let a=0;
                               for(a=0;a<=15;a++)
   
                               {
                                 let eb= document.getElementById(box[a]);
                                 if(arr[a]==0)
                                 {
                                  eb.innerHTML=" ";
                                  }
                                  else{
                                   eb.innerHTML=arr[a];
                                  }
                               }
   
                               colour();
   
        }
   
   
   
   
   
   
   //myup();
   
   document.getElementById("b1").addEventListener("click", myup);
   document.getElementById("b2").addEventListener("click", myleft);
   document.getElementById("b3").addEventListener("click", myright);
   document.getElementById("b4").addEventListener("click", mydown);
}