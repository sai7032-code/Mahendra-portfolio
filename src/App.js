import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import profileImg from "./mahendra_profile.jpg"; // Make sure the image is in src

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-200 text-slate-800 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20 px-6 text-center animate-fade-in">
        <img
          src={profileImg}
          alt="Mahendra Reddy"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide animate-slide-up">Mahendra Reddy</h1>
        <p className="text-xl font-medium animate-slide-up">
          Junior Cloud Engineer | AWS Certified | Systems & Network Admin
        </p>
        <a
          href="/Mahendra_Reddy_Resume.pdf"
          download
          className="inline-block mt-6 bg-white text-teal-700 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-100 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      {/* Objective */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4 text-emerald-800 border-b-4 border-teal-400 pb-2">🎯 Objective</h2>
        <p className="text-lg text-slate-700">
          Passionate and dedicated Computer Science graduate with AWS certification and hands-on experience
          in AWS core services. Looking to grow as a Junior Cloud Engineer while delivering secure and scalable solutions.
        </p>
      </section>

      {/* Education */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-emerald-800 border-b-4 border-teal-400 pb-2">🎓 Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "B.Tech in Computer Science and Engineering",
              college: "Sri Venkateswara College of Engineering and Technology, Chittoor",
              year: "2020 – 2024",
              score: "CGPA: 8.41"
            },
            {
              title: "Intermediate (12th)",
              college: "Narayana Junior College, Kadapa",
              year: "2020",
              score: "CGPA: 9.0"
            },
            {
              title: "SSC (10th)",
              college: "Balavikas E.M. High School, Kadapa",
              year: "2018",
              score: "CGPA: 9.8"
            }
          ].map((edu, index) => (
            <div key={index} className="bg-slate-100 rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-105">
              <h3 className="text-xl font-semibold text-black mb-2">{edu.title}</h3>
              <p className="text-slate-800 font-medium">{edu.college}</p>
              <p className="text-slate-700">{edu.year}</p>
              <p className="text-emerald-800 font-bold mt-2">{edu.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-emerald-800 border-b-4 border-teal-400 pb-2">🧠 Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Cloud Platforms",
              items: ["AWS (S3, EC2, AMI, Lambda, IAM, VPC, EBS, ELB, ASG, CloudFront, ElasticBeanstalk)"]
            },
            {
              title: "Systems Administration",
              items: ["Linux/Windows OS", "Backup & Recovery", "Troubleshooting"]
            },
            {
              title: "Networking",
              items: ["TCP/IP", "DNS", "Security Groups", "Load Balancing", "Subnets"]
            },
            {
              title: "Databases",
              items: ["RDS", "MySQL"]
            },
            {
              title: "Monitoring",
              items: ["AWS CloudWatch"]
            },
            {
              title: "Tools",
              items: ["Git", "GitHub"]
            }
          ].map((skill, index) => (
            <div key={index} className="bg-slate-100 rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-3">{skill.title}:</h3>
              <ul className="list-disc pl-6 text-lg text-slate-800 space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Trainings */}
      <section className="bg-slate-100 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-emerald-800 border-b-4 border-teal-400 pb-2">📚 Training</h2>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition hover:scale-105">
          <h3 className="text-xl font-semibold text-black mb-2">AWS re/Start – Magic Bus India Foundation</h3>
          <p className="text-slate-800 mb-2">Sep 2024 – Jan 2025 | Bangalore, India</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Completed practical AWS training focused on EC2, S3, RDS, IAM, and more.</li>
            <li>Worked on hands-on projects and gained real-time troubleshooting skills.</li>
            <li>Gained experience in deploying and managing secure AWS infrastructure.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-teal-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-emerald-800 border-b-4 border-teal-400 pb-2">🚀 Projects</h2>
        {[
          {
            title: "Secure VPC Architecture with Public and Private Subnets",
            tools: "AWS EC2, VPC, ELB, Auto Scaling",
            points: [
              "Designed secure VPC with public/private subnets across two AZs.",
              "Ensured high availability and security in production-like setup.",
              "Configured routing, NAT, ELB, and autoscaling for HA architecture."
            ]
          },
          {
            title: "Blue-Green Deployment using Elastic Beanstalk",
            tools: "ElasticBeanstalk, EC2",
            points: [
              "Zero-downtime deployment strategy using blue/green environments.",
              "Switched traffic between environments for rollback and stability.",
              "Handled environment versioning and safety mechanisms."
            ]
          }
        ].map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-105">
            <h3 className="text-xl font-semibold text-black mb-1">{project.title}</h3>
            <p className="text-sm text-emerald-700 font-medium mb-2">Tools: {project.tools}</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-emerald-800 border-b-4 border-teal-400 pb-2">🎖️ Certifications</h2>
        <ul className="list-disc pl-6 text-lg text-slate-800 space-y-2">
          <li>AWS Certified Cloud Practitioner – Jan 2025</li>
          <li>AWS Re/Start Graduate – Jan 2025</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-emerald-700 text-white p-8 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
        <p className="mb-2">📧 pvmahendrareddy@gmail.com</p>
        <p>📞 +91 9502167524</p>
        <p>📍 Bengaluru, Karnataka, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/Mahi0305/projects.git" target="_blank" rel="noopener noreferrer" className="hover:text-teal-200 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/pvmahi/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-200 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:pvmahendrareddy@gmail.com" className="hover:text-teal-200 transition">
            <MdEmail size={30} />
          </a>
          <a href="tel:9502167524" className="hover:text-teal-200 transition">
            <MdPhone size={30} />
          </a>
        </div>
      </section>

    </main>
  );
}
