import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { projectData } from './Data';
import { projectNav } from './Data';
import WorksItems from './WorksItems';


const Works = () => {

    const[item, setItem] = useState({name: "all"});
    const[project, setProject] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all"){
            setProject(projectData);
        }
        else{
            const newProjects = projectData.filter((project) =>{
                return project.category === item.name;
            });
            setProject(newProjects);
        }
    },[item]);



    const handleClick = (e,index) => {
        setItem({name: e.target.textContent});
        setActive(index);

    };
  return (
    <div>
    <div className="work_filter">
        {projectNav.map((item, index) => {
            return( 
            <button onClick={(e) => {
                handleClick(e, index);
            }}
             className={`${active === index ? 'active-work' : '' }
             'work_item'`}
             key={index}
              >
             {item.name}
             </button>
        );
        })}
    </div>

    <div className="work_container container grid">
        {project.map((item) =>{
            return <WorksItems  item = {item} key = {item.id} />;    
        })} 
    </div>


    </div>

    
  );
};


export default Works