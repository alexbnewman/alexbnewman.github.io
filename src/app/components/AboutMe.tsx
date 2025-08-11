import React from 'react'
import { Card } from './AboutMeCard'
import './aboutMe.css'

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="cards-grid">
        {/* Education Card */}
        <Card
          title="Education"
          imageSrc="/um_logo.png"
          imageAlt="University of Michigan logo"
        >
          <p>
            I am a student at the University of Michigan (graduating in 2025),
               double majoring in computer science and sociology.
          </p>
          <p className="mt-2">
            I am particularly interested in full-stack development, and have worked 
            for startups, nonprofits, and projects through student organizations. I 
            have also worked as a software developer for U-M's College of Engineering.
          </p>
        </Card>
        {/* Professional Experience Card */}
        <Card
          title="Professional Experience"
          imageSrc="/void_logo.jpg"
          imageAlt="Void Tech logo"
        >
          <p>
            I am currently working as Lead Developer for a UMich student
            organization called Void Tech.
          </p>
          <p className="mt-2">
            I manage a team of six developers, and our organization works to
            assist and solve issues for the U-M student community.
          </p>
        </Card>
        {/* Skills Card */}
        {/*todo replace this card kinda*/}
        <Card
          title="Skills & Interests"
          imageSrc="/snowboarding.jpg"
          imageAlt="Snowboarding"
        >
          <p>My technical skills include:</p>
          <ul className="skills-list">
            <li>React & TypeScript</li>
            <li>Full-stack development</li>
            <li>UI/UX design</li>
            <li>Team leadership</li>
          </ul>
          <p className="mt-2">
            Outside of tech, I enjoy photography, hiking, and playing the
            guitar.
          </p>
        </Card>
        {/* Hobby Card */}
        {/*todo replace this card kinda*/}
        <Card
          title="Hobbies"
          imageSrc="/snowboarding.jpg"
          imageAlt="Snowboarding"
        >
          <p className="mt-2">
            I love to rock climb 🧗, snowboard 🏂, read 📚, and discover new
            places (cafés, museums, libraries, etc.!) to camp out with my laptop
            💻.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default AboutMe;