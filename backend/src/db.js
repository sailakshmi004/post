// const {Pool}=require("pg");
// const pool=new Pool(
//     {
//         user:"postgres",
//         password:"sai",
//         host:"localhost",
//         port:2002,
//         database:"Post"
//     }
// )
// pool.connect();

const {Pool}=require("pg");
const pool=new Pool(
    {
        user:"postgres",
        password:"sai",
        host:"localhost",
        port:2002,
        database:"Post"
    }
)
module.exports=pool;