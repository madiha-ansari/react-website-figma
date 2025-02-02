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
                            alt="projects"
                            style={{ width: '190px', height: '20px' }} />
                    </center>
                </div>
                <div>
                    <img
                        src={myBlog}
                        alt="blog"
                        style={{ width: '1480px', height: '696px' }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Projects
