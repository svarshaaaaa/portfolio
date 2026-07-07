export const techProjects = [
  {
    id: 1,
    title: "VR Interview Anxiety Trainer",
    details: {
      problem: "Many students feel anxious about job interviews, especially if they're not confident speaking English, and this can hurt their performance when it matters most. VR exposure therapy offers a solution: it lets students practice realistic interview scenarios in a safe, private space where mistakes have no real-world consequences. By practicing repeatedly and getting feedback on things like confidence, body language, and English fluency, students can build real skill and walk into actual interviews feeling more prepared.",
      approach: "I built the interview simulation in Unity, where users step into a virtual interview room and talk to a ChatGPT-powered interviewer built using Inworld. Users record their answers, and I used the Whisper speech-to-text model together with the HuggingFace API to transcribe what they said. My C# scripts then analyzed the transcript to calculate filler word usage, speaking rate, and volume, and showed this feedback back to the user on screen. I was primarily ivolved in the technical implementation, but I also contributed to the ideation of the interview scenarios.",
      outcome: "The result was a working VR exposure therapy tool that combines conversational AI with objective speech analytics to help students practice and improve their interview performance. The thesis was worth 9 credits and received an A grade (GPA 8).",
      videoUrl: "https://drive.google.com/file/d/1MaYHQl8kUd1MJSvKJ-BL0iH5sNCMHQ6m/view?usp=sharing",
      tools: ["Unity", "C#", "Whisper model", "HuggingFace API"],
    },
  },
];

export const productProjects = [
  {
    id: 1,
    title: "Yatrafy",
    tag: "Case Study",
    details: {
      problem: "As part of ISB Neovate 2026, a case competition hosted by the Indian School of Business, my team (Code Pink) was tasked with solving a real business challenge for Yatrafy, a travel app. Yatrafy's users faced a fragmented travel planning experience — juggling multiple platforms to research, book, and manage trips. Our challenge was to design a generative AI-powered travel assistant that could turn a vague idea into a fully booked, personalized itinerary — all within one conversational interface.",
      approach: "The idea was simple — see what's already out there, identify the gaps, and bridge them. We mapped the competitive landscape across players like MakeMyTrip, Booking.com, and Google Travel, and discovered that no single platform was offering a truly end-to-end travel planning experience. We combined the shortcomings across all existing services and built our product strategy around addressing them. For a full breakdown, refer to the submission documents below.",
      pdfUrl: "/docs/round-1-submission.pdf",
      pdfUrl2: "/docs/round-2-submission.pdf",
      outcome: "While we didn't proceed to the finale, but I still wanted to see the vision come to life, so I built it using Claude's help. Click the link below to see  it!",
      siteUrl: "https://yatrafy.vercel.app/",
      tools: ["Claude", "Vercel"],
    },
  },
  {
    id: 2,
    title: "Crumb",
    tag: "Product Design",
    details: {
      problem: "Adulting comes with a lot of difficult decisions — the biggest one being, what to cook for dinner?I come across recipes on Instagram, YouTube, and countless other sites every day. And I want to save all my mum's recipes too. But there's nowhere for them all to live together.We have Strava for running and Hevy for the gym — but nothing to track our eating. So I built Crumb. One place to save recipes from anywhere, track what you eat, and finally answer the eternal question.", 
      approach: "My approach was to treat 'what’s for dinner' as a data fragmentation problem. I listed out every friction point—from lost Instagram DMs to voice notes from my mum—and prioritized features that solved those specific gaps first.",
      outcome: "The beauty of building today is that the barrier between an idea and a prototype has basically vanished. I spent my time focusing on the product vision—mapping out the user journey and the features that actually matter—and then used Claude Code as my 'co-pilot' to bring the technical side to life.",
      videoUrl: "/docs/Crumb Demo.mp4",
      tools: ["React Native", "Expo", "AsyncStorage", "Anthropic Claude API"],
    },
  },
  
];

export const timeline = [
  {
    year: "2020",
    title: "Completed High School",
    description: "Graduated from P.S.B.B. Senior Secondary School, Chennai with 95.6% in my board examinations with a focus on Physics, Chemistry, Mathematics, and Economics.",
  },
  {
    year: "2023",
    title: "Summer Internship at Citicorp Services India Private Limited",
    description: "Started my internship journey with a summer internship at Citicorp Services India Private Limited, where I worked on a file management tool using ReactJS, Springboot, JDBC, and MySQL.",
  },
  {
    year: "2024",
    title: "Completed my Bachelor's Degree",
    description: "Graduated from SSN College of Engineering with a Bachelors in Engineering in Computer Science with a CGPA of 8.236/10. During my time at SSN, I participated in several hackathons including the Smart India Hackathon 2023. I was also actively involved in the National Service Scheme (NSS) and contributed to various editorial teams.",
  },
  {
    year: "2024",
    title: "Started my Career",
    description: "Began my professional journey as a Software Engineer at Citicorp Services India Private Limited. I have worked across teams focused on payment processing and fraud detection systems, gaining experience in technologies like Springboot, AWS, PySpark.",
  },
  {
    year: "2026",
    title: "Started Master's Degree",
    description: "Currently pursuing MSc Management of Technology at TU Delft.",
  }
  
];

export const techCourses = [
  { name: "Course Name 1", meta: "Platform · Year", link: "#" },
  { name: "Course Name 2", meta: "Platform · Year", link: "#" },
  { name: "Course Name 3", meta: "Platform · Year", link: "#" },
];

export const productCourses = [
  { name: "Product Management Course", meta: "Platform · Year", link: "#" },
  { name: "Course Name 2", meta: "Platform · Year", link: "#" },
];