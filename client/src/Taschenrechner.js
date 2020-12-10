import React from "react";







function Button(){
return(
<div >
  <form method="post" action="/multi">  
 <button > * </button>
</form>

<form method="post" action="/addition">  
 <button > + </button>
</form>

<form method="post" action="/division">  
 <button > / </button>
</form>

<form method="post" action="/substraction">  
 <button > - </button>
</form>



<form method="post" action="/operationJson">  
 <button >erstellen</button>
</form>
 
</div>
);

}



export default Button;