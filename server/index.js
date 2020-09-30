const express = require('express')
const mysql = require('mysql')
const cors = require("cors")
const app = express()

app.use(express.static("build"))
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'
    // multipleStatements:true
})

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("connected to my sql")
})

app.get('/members', async (req, res) => {
    let q = `SELECT * from members`
    const results = await Query(q)
    res.json(results)
})


app.get('/tasks', async (req, res) => {
    let q = `SELECT 
    tasks.taskId,
    tasks.descriptionTask,
    tasks.taskDate,
    members.nickname as 'members'
    FROM tasks
    INNER JOIN members
    ON tasks.m_id = members.memberId`

    const results = await Query(q)
    res.json(results)
    // res.send('check')

})



app.post('/task', async (req, res) => {
    let q = `INSERT INTO 
    tasks (descriptionTask, m_id)
    VALUES (
        "${req.body.descriptionTask}",
        ${req.body.m_id}
    )`
    // db.query(q, (err, results)=>{
    //     if(err){
    //         res.sendStatus(500)
    //         throw err
    //     }
    //     res.json(results)
    // })
    const results = await Query(q)
    res.json(results)
})

app.delete('/tasks/:id', async (req, res) => {
    const q = `DELETE FROM tasks WHERE taskId =?`
    db.query(q, [req.params.id], (err, results) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.json(results)
        }
    })
})



app.listen(1001, console.log("rockin1000"))


function Query(q, ...par) {
    return new Promise((resolve, reject) => {
        db.query(q, par, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}



