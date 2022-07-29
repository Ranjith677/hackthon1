let body=document.querySelector('body');
let div=document.createElement('div')
div.innerHTML=`<div class="row">
<div class="container m-col-6 sm-col6"style="background: color #090909;">
<nav class="navbar navbar-light  style="background-color:#daeded;">
    <div class="container-fluid >
      <a class="navbar-brand text-capitalize " href="#">
        <b> <p class="text-center">Nationlize</p></b>
      </a>
    </div>
  </nav>
</div>

<div class="container sm-col6" pt-5 p-lg-5"style="background-color:#dce1e1;">

<div class="card  " style="width: 50rem; background-color: #6b076d45;">
    <div class="card-body">
        <div class="container">
            <form onsubmit="nameData(event)">
             <label for="name"><h6><b>Enter name</b></h6></label>
             <input type="text"name="name" id="text1" placeholder="enter name">
             <br>
             <button  type="submit"   class="btn btn-primary" >click</button>
             <div id="cont">

             </div>
            </form>
        </div>
    
    </div>
</div>
</div>
</div>
`
body.append(div);
//https://api.nationalize.io/?name[]=michael
async function nameData(event){
    event.preventDefault()
    var product = document.getElementById('text1').value
    console.log(product)
    let data = await fetch(`https://api.nationalize.io/?name[]=${product}`)
    let res = await data.json()
    

    //console.log(res)
    data1=(res[0].country[0].country_id)
    data2=(res[0].country[1].country_id)

    data3=(res[0].country[0].probability)
    data4=(res[0].country[1].probability)

 //console.log(data1,data2)
 var input=document.getElementById('cont')
 input.innerHTML=`
 <ul class="list-group"><mark class="text-white bg-dark"> Name: ${product}</mark>
 <li class="list-group-item list-group-item-primary">country id 1:${data1}</li>
 <li class="list-group-item list-group-item-secondary">probability percentage:${data3}%</li>
 <li class="list-group-item list-group-item-primary">country id 2:${data2}</li>
 <li class="list-group-item list-group-item-secondary">probability percentage:${data4}%</li>
 </ul>                                             
 `
 
    
  }
 

