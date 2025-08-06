const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    type: "Full-time",
    experience: "2+ years",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    postedAt: "2025-08-01"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Node.js", "Express", "MongoDB"],
    postedAt: "2025-08-02"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Remote",
    type: "Contract",
    experience: "4+ years",
    skills: ["React", "Node.js", "MongoDB"],
    postedAt: "2025-08-03"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Flipkart",
    location: "Bangalore",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Excel", "SQL", "Tableau"],
    postedAt: "2025-08-04"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Zomato",
    location: "Gurgaon",
    type: "Internship",
    experience: "Fresher",
    skills: ["Figma", "Adobe XD", "Creativity"],
    postedAt: "2025-08-05"
  },
  // 25 more jobs...
];

// Dynamically generate remaining 25 dummy jobs
for (let i = 6; i <= 30; i++) {
  jobs.push({
    id: i,
    title: `Software Engineer Level ${i % 5}`,
    company: `TechCompany${i}`,
    location: ["Delhi", "Pune", "Chennai", "Remote"][i % 4],
    type: ["Full-time", "Part-time", "Contract", "Internship"][i % 4],
    experience: `${(i % 5) + 1}+ years`,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"].slice(0, (i % 4) + 1),
    postedAt: `2025-08-${i < 10 ? "0" + i : i}`
  });
}

export default jobs;
