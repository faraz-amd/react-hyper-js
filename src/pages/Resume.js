import React, { useEffect, useRef } from 'react';

function Resume() {
  const timelineRef = useRef(null);

  useEffect(() => {
    // Calculate timeline line height
    const updateTimelineLines = () => {
      const timelines = document.querySelectorAll('.timeline');
      timelines.forEach((timeline) => {
        const items = timeline.querySelectorAll(
          '.timeline-item:not(:last-child)'
        );
        let totalHeight = 0;
        items.forEach((item) => {
          totalHeight += item.offsetHeight;
        });
        const line = timeline.querySelector('.line');
        if (line) {
          line.style.height = `${totalHeight}px`;
        }
      });
    };

    updateTimelineLines();
    window.addEventListener('resize', updateTimelineLines);
    return () => window.removeEventListener('resize', updateTimelineLines);
  }, []);

  return (
    <main className="resume-page">
      <div className="resume-wrapper" role="main">
        <section className="name">
          <h1>Ahmad Faraz</h1>
          <h2>Senior Test Engineer</h2>
        </section>
        <section>
          <h2>About Me</h2>
          <p>
            Accomplished Senior Test Engineer with over 4 years of experience in
            testing software applications, skilled in identifying defects and
            improving system performance. Demonstrated expertise in developing
            and implementing test strategies, crafting test cases, and executing
            regression testing. A proven track record of delivering high-quality
            results. Seeking a challenging testing environment to leverage my
            skills and drive successful outcomes.
          </p>
        </section>
        <section>
          <h2>Professional Experience</h2>
          <div className="timeline" ref={timelineRef}>
            <span className="line"></span>
            <div className="timeline-item">
              <h3>
                Coforge Limited (Senior Test Engineer)
                <small>2022 – 2023</small>
              </h3>
              <ul>
                <li>
                  Developed robust automation scripts for regression testing,
                  reducing manual testing efforts by 70% and enabling faster
                  release cycles.
                </li>
                <li>Established CI/CD pipelines for streamlined process.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>
                KGS Advisors LLP (Software Engineer)
                <small>Oct, 2021 – Present</small>
              </h3>
              <ul>
                <li>
                  Led a team of test engineers in developing and implementing
                  automated testing frameworks, resulting in a 40% increase in
                  testing efficiency.
                </li>
                <li>
                  Designed and executed comprehensive test plans for complex
                  software systems, ensuring high quality and on-time delivery
                  of products.
                </li>
                <li>
                  Collaborated with cross-functional teams to identify and
                  resolve software defects, reducing post-release issues by 25%.
                </li>
                <li>
                  Implemented automated testing tools and frameworks, resulting
                  in a 50% increase in test coverage and 30% decrease in testing
                  time.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>
                Radoratory Technologies (Test Engineer)
                <small>Aug, 2019 – Jan, 2021</small>
              </h3>
              <ul>
                <li>
                  Designed and implemented scalable, efficient code for a new
                  web application, leading to a 20% increase in user engagement
                  within the first month of launch.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2>Hard Skills</h2>
          <ul>
            <li>Test Automation Tools</li>
            <li>Testing Frameworks</li>
            <li>API Testing & Automation</li>
            <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
            <li>Agile Methodologies</li>
          </ul>
        </section>
        <section>
          <h2>Tech Stack</h2>
          <ul>
            <li>Java, JavaScript, Typescript</li>
            <li>Selenium, Playwright, Cucumber</li>
            <li>Git, CI/CD Pipeline</li>
            <li>RestAssured, Postman, SwaggerUI</li>
            <li>Linux, Bash, Scripting</li>
          </ul>
        </section>
        <section>
          <h2>Education Background</h2>
          <ul>
            <li>B.Tech - CSE, Dr. A.P.J Kalam Technical University, 2019</li>
            <li>Sr. Secondary - PCM, Maharishi Vidya Mandir (CBSE), 2014</li>
            <li>High School - PCM, St. Xavier's High School (CBSE), 2011</li>
          </ul>
        </section>
        <section>
          <h2>Contact Me</h2>
          <div className="timeline condensed">
            <span className="line"></span>
            <div className="timeline-item">
              <p>faraz.ahmad@live.in</p>
            </div>
            <div className="timeline-item">
              <p>Greater Noida, India</p>
            </div>
            <div className="timeline-item">
              <p>+91 7007 9666 87</p>
            </div>
            <div className="timeline-item">
              <p>
                <a
                  href="https://cloakedsec.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cloakedsec.netlify.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Resume;
