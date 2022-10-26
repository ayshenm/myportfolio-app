import React from 'react';
import './skill.css';
import Frontend from './Image';
import Backend from './SkillData';

const Skills = () => {
  return (
    <section className="skill section" id="skill">
        <h2 className='section_title'>Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills