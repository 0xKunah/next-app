export default async function handler(req, res) {
    if(req.headers.authorization){
        res.status(200).json(await fetchUser(req.headers.authorization))
    } else return res.status(401).json({message : "error"})
}

async function fetchUser(id) {
    const response = await fetch(`https://discord.com/api/v8/users/${id}`, {
      headers: {
        Authorization: `Bot ODc0NDEwMjE4NTY0NDk3NDE4.YRGj-Q.DRWqJsnHnK3R5aNrAfYjU8whpPQ`
      }
    })
    if (!response.ok) throw new Error(`Error status code: ${response.status}`)
    return await response.json()
  }