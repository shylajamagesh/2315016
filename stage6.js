const axios = require("axios");
const TYPE_WEIGHT = {Placement: 3, Result: 2, Event: 1 };

function getTimeValue(timestamp) {
    return new Date(timestamp).getTime();
}

function getPriorityScore(notification) {
    const typeScore = TYPE_WEIGHT[notification.Type] || 0;
    const timeScore = getTimeValue(notification.Timestamp);
    return typeScore * 1000000000000 + timeScore;
}

async function getTopNotifications() {
    try {
        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzE1MDE2QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzYyMzMsImlhdCI6MTc4Mjk3NTMzMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImMyNmJhNzA2LTk1MWEtNDMzNi1hMmE2LTZhNjM4ZDBiNDZhNCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNoeWxhamEgbSIsInN1YiI6ImNhZmVjYjRiLWEyNTUtNGU3YS04YTBkLTg0NTg1OTRjMWZjOSJ9LCJlbWFpbCI6IjIzMTUwMTZAbmVjLmVkdS5pbiIsIm5hbWUiOiJzaHlsYWphIG0iLCJyb2xsTm8iOiIyMzE1MDE2IiwiYWNjZXNzQ29kZSI6IkVSelV5eCIsImNsaWVudElEIjoiY2FmZWNiNGItYTI1NS00ZTdhLThhMGQtODQ1ODU5NGMxZmM5IiwiY2xpZW50U2VjcmV0IjoicVlBTW1jam1yTWdBa3RlZCJ9.GLimUT4yP_5vp15bH1SD1hDoGOgwQmrg9WsRf_RJwhw"
                }
            }
        );

        const notifications = response.data.notifications;

        const top10 = notifications
            .sort((a, b) => getPriorityScore(b) - getPriorityScore(a))
            .slice(0, 10);

        console.log("Top 10 Priority Notifications:\n");
        console.log(top10);
        
    } catch (error) {
        console.log("Error fetching notifications:", error.message);
    }
}

getTopNotifications();