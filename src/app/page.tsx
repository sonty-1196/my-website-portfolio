import Header from "@/components/Header";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div id="top" className="font-sans">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-28 hero-glow">
        <div className="mx-auto max-w-6xl px-6">
          <div className="badge badge-accent">Data Science / Software Engineering</div>
          <h1 className="mt-2 text-4xl sm:text-6xl font-semibold leading-tight">
            Hi, I&apos;m <span className="neon-text">Daewansh Bansal</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/80">
            BSc Software Engineering student at the University of Europe for Applied Sciences (Potsdam).
            I&apos;m passionate about data science, machine learning, and building reliable software with a minimalist touch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            <a href="/Daewansh_Internship_Resume.pdf" className="btn btn-ghost" target="_blank" rel="noreferrer" download>Download CV</a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="Who I am">
        <div className="max-w-none text-foreground/80">
          <p>
            I&apos;m a detail-oriented developer who enjoys turning data into insight. My interests span
            data analysis, classical machine learning, and the tooling that makes teams effective.
            Recently, I&apos;ve been exploring model evaluation, building predictive models and presenting the clear insights.
            Eager to contribute as a Data science Intern and grow my practical experience turning data into real value. 
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Skills" title="Core toolbox">
        <ul className="flex flex-wrap gap-2 text-sm text-foreground/90">
          {[
            "Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn", "SQL", "Data Visualization", "C++", "Tableau", "Logistic Regression", "Excel", "Html", "CSS", "Data Cleaning", "Linear Regression", "Machine Learning"
          ].map((s) => (
            <li key={s} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">{s}</li>
          ))}
        </ul>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Projects" title="Selected work">
        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Loan Approval Prediction Model"
            description="Built a machine learning model to predict loan approvals, Collected and cleaned large datasets, Performed exploratory data analysis, applied Logistic Regression achieving 82% accuracy.
             Visualized trends and presented results in clear way."
            tech={["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "SciKit-learn", "Jupyter Notebook"]}
            repo="https://github.com/sonty-1196/NewcodingBot"
          />
          <ProjectCard
            title="Retail Sales Analysis"
            description="Conducted the data analysis on sales across multiple regions. Identified the top-selling products, seasonal sales patterns, and revenue gaps.
            Delivered the insights to improve the business performace in underperforming regions."
            tech={["Python", "Pandas", "Matplotlib", "Seaborn", "Vscode"]}
            repo="https://github.com/sonty-1196/Retail-Sales-Analysis"
          />
          </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Experience" title="Experience">
        <div className="space-y-4">
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Student Projects & Collaborations</h3>
              <span className="text-xs text-foreground/60">2025</span>
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              Contributed in the development of Stock Market App in a team using Agile methodologies
            </p>
          </div>
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Student Projects & Collaborations</h3>
              <span className="text-xs text-foreground/60">2024</span>
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              Analyzed social media posts to determine the public sentiment and identify trends, key insights using Python in a team
            </p>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title="University">
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">BSc Software Engineering</h3>
            <span className="text-xs text-foreground/60">Potsdam, Germany [2023 - Present]</span>
          </div>
          <p className="mt-1 text-sm text-foreground/80">University of Europe for Applied Sciences</p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Let&apos;s talk">
        <div className="card p-6">
          <p className="text-sm text-foreground/80">
            Open to internships and entry-level roles in data science.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="mailto:daewansh.karnal@gmail.com">Email</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-foreground/60">
        (c) {new Date().getFullYear()} Daewansh Bansal
      </footer>
    </div>
  );
}
