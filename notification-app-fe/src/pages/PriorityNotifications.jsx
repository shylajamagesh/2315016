import { useEffect, useState } from "react"

const weight = {
  Placement: 3,
  Result: 2,
  Event: 1
}

function PriorityNotifications() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications?limit=50&page=1", {
      headers: {
        Authorization: "Bearer YOUR_TOKEN"
      }
    })
      .then(res => res.json())
      .then(res => {
        const sorted = res.notifications
          .sort((a, b) =>
            (weight[b.Type] || 0) - (weight[a.Type] || 0) ||
            new Date(b.Timestamp) - new Date(a.Timestamp)
          )
          .slice(0, 10)

        setData(sorted)
      })
  }, [])

  return (
    <div>
      <h3>Priority Notifications</h3>

      {data.map(n => (
        <div key={n.ID} style={{border:"1px solid blue", margin:5, padding:5}}>
          <p>{n.Type}</p>
          <p>{n.Message}</p>
        </div>
      ))}
    </div>
  )
}

export default PriorityNotifications