import AllNotifications from "./AllNotifications"
import PriorityNotifications from "./PriorityNotifications"

function App() {
  return (
    <div>
      <h2>Notification App</h2>

      <AllNotifications />
      <hr />
      <PriorityNotifications />
    </div>
  )
}

export default App