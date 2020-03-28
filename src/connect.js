// 数据库的连接文件
// 连接数据库 27017 默认端口号
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nz1911:nz1911@cluster-v8nx0.mongodb.net/mall?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true });

var db = mongoose.connection //数据库的连接对象
db.on('error',()=>{ console.log('数据库连接失败')});
db.once('open', function() {
  console.log('数据库第一次连接成功')
});

let userSchema=mongoose.Schema({
    us:{type:String},
    ps:{type:String}
})

let model=mongoose.model('user',userSchema)
model.insertMany({us:'菲菲',ps:123})
.then(()=>{
    console.log('ok')
})
.catch((err)=>{
    console.log(err)
})