import Graffy from '@graffy/core'
import GraffyFill from '@graffy/fill'
import GraffyServer from '@graffy/server'
import express from 'express'
import resolver from './resolver'

const g = new Graffy()
g.use(GraffyFill())
g.use(resolver)

const app = express()
app.use('/api', GraffyServer(g))
app.listen(3001)

console.log('http://localhost:3001')
