
const express = require("express");
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

const missions=[{id:"1",missionName:"Able 1",astronaut:["Khattab","Joseph M","loren Acton"],progress:34},
{id:"2",missionName:"Apollo 1",astronaut:["Khattab","Ali AlQarni","yuri Artyukhin"],progress:100},
{id:"3",missionName:"AirSTAR",astronaut:["Khattab","Jeffrey Ashby","Terrence Wilecrum"],progress:90}
]

//create anew space mission
app.post("/mission",(req,res)=>{
   const data=req.body;
   data.astronaut=JSON.parse(data.astronaut);
    missions.push(data);
    console.log(req.body);
    res.send("mission is create");
})

//retrieve all missions
app.get("/mission",(req,res)=>{
       res.send(missions);
})



//retrieve aspecific missions by ID
app.get("/mission/:id",(req,res)=>{
    const id=req.params.id;
    for(let i=0;i<missions.length;i++){
        if(missions[i].id===id){
            res.send(missions[i]);
        } }
    res.send("the mission not found");
})




//update mission
app.put("/mission",(req,res)=>{
    const data=req.body;
    data.astronaut=JSON.parse(data.astronaut);
    console.log(data);
    for(let i=0;i<missions.length;i++){
        if(missions[i].id===data.id){
            missions[i]=data;
       res.send("the mission is update");
    }}
    res.send("the mission is not found");
})



//cancel mission
app.delete("/mission/:id",(req,res)=>{
    const id=req.params.id;
    for(let i=0;i<missions.length;i++){
        if(missions[i].id===id){
           missions.splice(i,1);
           res.send("the mission is delete")
    }}
    res.send("the mission is not found");
})




app.listen(3000,()=>{
    console.log("the server running on port number 3000");
});
















/*
const arr=[{id:"1",username:"Khattab",age:"20"}
    ,{id:"2",username:"rami",age:"20"}
   ,{id:"3",username:"omar",age:"20"}
]

app.get("/users",(req,res)=>{
res.send(arr);
});

app.post("/users",(req,res)=>{
    arr.push(req.body);
    console.log(req.body);
    res.send("create user");
    });
  
app.put("/users",(req,res)=>{
    const id=req.body.id;
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id){
            arr[i]=req.body;
            res.send("user is updated");
        }
    }
    res.send("user not found");
})


app.get("/users/:id",(req,res)=>{
    for(let i=0;i<arr.length;i++){
    if(arr[i].id==req.params.id){
        res.send(arr[i]);
    } }
    res.send("user not found");
})

app.delete("/users/:id",(req,res)=>{
    for(let i=0;i<arr.length;i++){
    if(arr[i].id==req.params.id){
        arr.splice(i,1);
        res.send(arr);
    } }
    res.send("user not found");
})




app.listen(3000,()=>{
    console.log("listen on port number 3000");
});





//app.use(urlencoded({extended:'true'}));

app.use(express.urlencoded({extended:true}));


const arr=[{id:"1",username:"Khattab",age:"20"}
           ,{id:"2",username:"rami",age:"20"}
          ,{id:"3",username:"rasha",age:"20"}
          ,{id:"4",username:"heba",age:"20"}

];

app.get("/users",(req,res)=>{
    res.send(arr);
    });

app.get("/users/:username",(req,res)=>{
        console.log(req.params.username);
        res.send("");
    });





app.get("/username/:username",(req,res)=>{
    console.log(req.params.username);
    const urlusername=req.params.username;
    let userNeeded;
    for(let i=0;i<arr.length;i++){
    if(arr[i].username===urlusername){
        userNeeded=arr[i];
    }
    }
    if(userNeeded){
        res.send( userNeeded)
    }
    else
    res.send({error:"user not found"})

})



app.get("/home",(req,res)=>{
    res.send("hello from get")
})

app.post("/home",(req,res)=>{
    res.send("hello from post")
})


app.post("/user",(req,res)=>{
    arr.push(req.body)
    console.log(req.body)
    res.send("user is create")
})
*/