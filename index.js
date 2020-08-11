const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

nunjucks.configure('src/views', {
    express:server,
    noCache: true,

})

server
    //Recebendo os dados do req.body
    .use(express.urlencoded({ extended: true }))
    //Configurando arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    //Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(process.env.PORT || 5500)

