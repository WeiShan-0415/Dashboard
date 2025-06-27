import React from "react";

const GreetingHeader = () => {
    const userName = "Foo";
    const quote = "The only way to do great work is to love what you do";

    // Get Malaysia date and day
    const malaysiaDate = new Date().toLocaleDateString("en-MY", {
        timeZone: "Asia/Kuala_Lumpur",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        weekday: "long"
    });
    // Format: "Sunday, 18/05/2025"
    const [weekday, date] = malaysiaDate.split(", ");
    const today = `${date} ${weekday}`;

    return (
        <div style={{
            color: "white",
            fontFamily: "'Calistoga','Segoe UI', Arial, sans-serif",
            marginTop: "5px",
            marginLeft: "60px",
            textShadow: "1px 1px 4px #000"
        }}>
            <h1 style={{ fontWeight: "bold", fontSize: "2.8rem", margin: 0 }}>
                Hi {userName} !
            </h1>
            <div style={{ fontWeight: "bold", fontSize: "1.5rem", margin: 0 }}>
                {today}
            </div>
            <div style={{ fontSize: "1.2rem", marginTop: "10px" }}>
                {quote}
            </div>
        </div>
    );
};

export default GreetingHeader;