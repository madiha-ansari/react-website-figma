import React from 'react'
import projects from "../assets/My Projects.png"
import myBlog from "../assets/Blog.png";  // Image import


const Projects = () => {
    return (
        <div>
            <div>
                <div>
                    <center>
                        <img
                            src={projects}
                            alt="Navbar"
                            style={{ width: '190px', height: '20px' }}
                        /></center>
                </div>
                <img
                    src={myBlog}
                    alt="Navbar"
                    style={{ width: '1480px', height: '696px' }}
                />
            </div>

        </div>
    )
}

export default Projects
