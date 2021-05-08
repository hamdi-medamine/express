const express =require('express')
const path= require('path')
const app=express()


app.use((req, res, next) => {
    let date = new Date();
    let Day = date.getDay() + 1;
    let Hour = date.getHours();
    if (Day > 0 && Day < 6 && Hour >= 9 && Hour <= 17) next();
    else {
      res.send(
        ' <div  style="font-size:xx-large; text-align: center;"> <h3>This website is only available : </br> Monday to Friday </br> From 9am to 17pm </h3> </div>'
      );
      res.end();
    }
  });


  app.use(express.static(path.join(__dirname,'views')))

 
 

app.listen(5000,(err)=>{
if (err) {
    return err
} 
else {
    console.log('server is running...')
}
})

