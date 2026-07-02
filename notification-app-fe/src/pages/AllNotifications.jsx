import { useEffect, useState } from "react"

function AllNotifications() {
  const [data, setData] = useState([])
  const [viewed, setViewed] = useState([])

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications?limit=10&page=1", {
      headers: {
        Authorization: "Bearer YOUR_TOKEN"
      }
    })
      .then(res => res.json())
      .then(res => setData(res.notifications))
  }, [])

  const mark = (id) => {
    setViewed([...viewed, id])
  }

  return (
    <div>
      <h3>All Notifications</h3>

      {data.map(n => (
        <div key={n.ID} onClick={() => mark(n.ID)} style={{border:"1px solid black", margin:5, padding:5}}>
          <p>{n.Type}</p>
          <p>{n.Message}</p>
          <p>{n.Timestamp}</p>
          <p>{viewed.includes(n.ID) ? "VIEWED" : "NEW"}</p>
        </div>
      ))}
    </div>
  )
}

export default AllNotifications