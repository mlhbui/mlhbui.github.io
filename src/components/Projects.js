"use client"
import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import '../styles/Projects.css'

const Projects = () => {
    const projectData = [
        {
            category: "development",  
            role: "Software System - Taxi User Simulation",
            duration: "2022",
            description: "Java model of a transportation service following AGILE development and software architecture principles. Using an object-oriented approach, the system tracked 100s of different routes of users, taxis, and bikes with extensible features such as cancellation and shared rides affecting movement.",
            skill: ["Java", "AGILE Development", "Object-Oriented Design"],
        },
        {
            category: "data Analysis",  
            role: "Data Visualizations - Lobbyist API",
            duration: "2023",
            description: "Integrated multiple datasets on Chicago lobbyist contributions to visualize and analyze trends. Accessing JSON endpoints with Python, over +10 visual models were made for the identification of significant actions and political campaigns.",
            skill: ["Python", "Data Visualizations", "JSON", "Public Awareness"],
        },
        {
            category: "design", 
            role: "UI/UX - Educational Website",
            duration: "2024",
            description: "Designed the UI/UX for an updated platform with a focus on user experience, accessibility, and a mobile-first approach.",
            skill: ["UI/UX Design", "Figma", "Prototyping"],
        },
        {
            category: "development", 
            role: "Machine Learning with Python - EKG Analysis",
            duration: "2025",
            description: "Machine learning model development to analyze EKG data to identify cardiovascular conditions like Arrythmia's",
            skill: ["Machine Learning", "Python", "Scikit Learn", "PCA"]
        }
    ];
    const tabs = ["all", "development", "design", "data Analysis"];

    const [selectedTab, setSelectedTab] = useState("all");

    const filteredProjects =
        selectedTab === "all"
            ? projectData
            : projectData.filter((project) => project.category === selectedTab);

    return (
        <div className='projects'>
            {/* Tab Buttons */}
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={selectedTab === tab ? "active" : ""}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize tab name */}
                    </button>
                ))}
            </div>

            {/* Display filtered projects */}

            <div className="tab-content">
                {filteredProjects.map((item, index) => (
                    <div className="timeline_item" key={index}>
                        <div className="timeline_entry">
                            <TimelineItem {...item} />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Projects;
