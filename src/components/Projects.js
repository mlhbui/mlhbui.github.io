"use client"
import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import '../styles/Projects.css'

const Projects = () => {
    const projectData = [
        {
            category: "development",  
            role: "Software System - Taxi Service",
            duration: "2022",
            description: "Java model of a transportation service following AGILE development and software architecture principles. Object-oriented design to ensure maintainability and performance with the system tracked different routes of users, taxis, and modes of transportation with different map requirements.",
            skill: ["Java", "AGILE Development", "Object-Oriented Design"],
            highlightedWords: [],
        },
        {
            category: "development",  
            role: "Simulation - Exploring Traffic Algorithms",
            duration: "2024",
            description: "Utlizing Netlogo to analyze traffic algorithms and performance.",
            skill: ["Research", "Agent-Based Modeling"],
            highlightedWords: [],
        },
        {
            category: "data Analysis",  
            role: "Data Mining - Chicago Lobbyist API",
            duration: "2023",
            description: "Integrated multiple datasets on Chicago lobbyist contributions to visualize and analyze trends. Accessing JSON endpoints with Python, over +10 visual models were made for the identification of significant actions and political campaigns.",
            skill: ["Python", "Data Visualizations", "JSON", "Public Awareness"],
            highlightedWords: [],

        },
        {
            category: "data Analysis",  
            role: "Bioinformatics - Technical Support",
            duration: "2024-25",
            description: "Designed and implemented a small database to support research in biology and survival statistics. Over 20+ lineages collected for genomic research, and converted into graphical models ranging from specific individual statistics to comprehensive data analysis.",
            skill: ["Python", "Data Visualizations", "Data Science"],
            highlightedWords: [],
        },
        {
            category: "design", 
            role: "User Interface Redesign - Educational Platform",
            duration: "2024",
            description: "Designed the UI/UX for an updated platform with a focus on user experience, accessibility, and a mobile-first approach. Using Figma to enhance the design of an educational system, improving usability, maintainability, and functionality. Compared supporting research and other web platforms to define the user model and be consistent with HCI principles.",
            skill: ["UI/UX Design", "Figma", "Prototyping"],
            highlightedWords: [],
        },
        {
            category: "development", 
            role: "Machine Learning with Python - EKG Analysis",
            duration: "2025",
            description: "Machine learning model development to analyze EKG data to identify cardiovascular conditions. Using scikit-learn in Python for classification and analysis with performance of over 85% accuracy accross conditions.",
            skill: ["Machine Learning", "Python", "Scikit Learn", "PCA"],
            highlightedWords: [],
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
                        <TimelineItem {...item} highlightedWords={item.highlightedWords} />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Projects;
