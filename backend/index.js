const app  = new (require('koa'));
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

app.use(
    mount('/',async function(ctx,next){
        
        ctx.status = 200;
        ctx.body =fs.readFileSync(__dirname+'/dist/index.html') ;
        return;
    })
)
app.listen(4000, ()=>{ console.log('http://localhost:4000')})