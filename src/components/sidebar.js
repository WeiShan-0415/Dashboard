import React, { useState } from 'react';
import "./Sidebar.css";

const navItems = [
    { src: "/home.png", alt: "Home" },
    { src: "/calendar.png", alt: "Upcoming Event" },
    { src: "/todolist.png", alt: "To Do List" },
    { src: "/budget.png", alt: "Budget" },
    { src: "/timer.png", alt: "Timer" },
];

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0); // Track active item

    return (
        <div className={`sidebar${expanded ? " expanded" : ""}`}>
            <div className="sidebar_logo" onClick={() => setExpanded(e => !e)} style={{ cursor: "pointer" }}>
                <img src='/menu.png' alt="Menu"/>
                {expanded && <span className="sidebar_label">Menu</span>}
            </div>
            <nav className="sidebar_nav">
                <ul>
                    {navItems.map((item, idx) => (
                        <li
                            key={item.alt}
                            className={activeIdx === idx ? "active" : ""}
                            onClick={() => setActiveIdx(idx)}
                        >
                            <a href="#">
                                <img src={item.src} alt={item.alt}/>
                                {expanded && <span className="sidebar_label">{item.alt}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                className={`sidebar_footer${activeIdx === navItems.length ? " active" : ""}`}
                onClick={() => setActiveIdx(navItems.length)}
                tabIndex={0}
                style={{ cursor: "pointer" }}
            >
                <img src="/Profile.png" alt="Profile"/>
                {expanded && <span className="sidebar_label">Profile</span>}
            </div>
        </div>
    );
};

export default Sidebar;