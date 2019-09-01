import { graph, link, page, merge, unwrap, makeStream, setVersion } from '@graffy/common'
import Photon from '@generated/photon'

const photon = new Photon()

// async function fillUsers() {
//   const allUsers = await photon.users.findMany({})
//   const state = graph({ users: {} })
//   const changed = allUsers.map(user => {
//     const result = {
//       key: user.id,
//       clock: 0,
//       children: [
//         {
//           key: 'email',
//           clock: 0,
//           value: user.email,
//         },
//         {
//           key: 'id',
//           clock: 0,
//           value: user.id,
//         },
//         {
//           key: 'name',
//           clock: 0,
//           value: user.name,
//         },
//       ],
//     }
//     return result
//   })
//   const changedState = graph({ users: changed })
//   const currentState = merge(state, changedState)
//   console.log(JSON.stringify(currentState))
// }

// fillUsers().then(() => console.log('done'))

export default function(g) {
  g.onGet('/users', async query => {
    // I would like to get all the users along with their posts
    // `findMany` with no params will give all the users
    return graph({ users: await photon.users.findMany({}) })
  })

  g.onGet('/posts', async query => {
    // I would like to get all the posts along with their user information
    return graph({ posts: await photon.posts.findMany({}) })
  })
}
