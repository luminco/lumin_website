
//after adding payment

// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { courses } from "../data";
// import PaymentForm from "../Components/PaymentForm";
// import "../index.css";


// const CoursePage = () => {
//   const { term, courseId } = useParams();
//   const [showPayment, setShowPayment] = useState(false);

//   // Flatten all courses
//   const allCourses = courses.flatMap((termData) =>
//     termData.courses.map((course) => ({
//       ...course,
//       term: termData.id,
//     }))
//   );

//   // Find selected course
//   const course = allCourses.find(
//     (c) =>
//       c.id.toLowerCase() === courseId.toLowerCase() &&
//       c.term === term
//   );

//   // If course not found
//   if (!course) {
//     return (
//       <div className="not-found-page">
//         <h1>Course Not Found</h1>
//         <Link to="/" className="orig-green-btn">
//           Back Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="course-page">

//       {/* PAYMENT MODAL */}
//       {showPayment && (
//         <PaymentForm
//           courseId={course.id}
//           title={course.courseName}
//           onClose={() => setShowPayment(false)}
//         />
//       )}

//       {/* TOP SECTION */}
//       <section className="course-top-section">

//         {/* LEFT SIDE */}
//         <div className="course-left">

//           <div className="breadcrumb">
//             Courses &gt; Term {term} &gt; {course.courseName}
//           </div>

//           <h1 className="course-title">
//             {course.courseName}
//           </h1>

//           <p className="course-created">
//             Created By <span>{course.instructor}</span>
//           </p>

//           <div className="course-meta">
//             <p>Last Updated 6th July 2024</p>
//             <p>English with conversational Hindi</p>
//           </div>

//           <h2 className="about-author-title">About the author</h2>

//           <p className="author-description">
//             We provide top quality semester preparation content
//             specially designed for law students. This course
//             contains concise notes, case summaries, video lectures,
//             and solved PYQs.
//           </p>

//           {/* FEATURES */}
//           <div className="course-features">
//             <div className="feature-box">
//               <h3>Video Lectures</h3>
//               <p>Easy to learn video lectures.</p>
//             </div>
//             <div className="feature-box">
//               <h3>Lecture Notes</h3>
//               <p>Comprehensive notes for learning.</p>
//             </div>
//             <div className="feature-box">
//               <h3>Case Summaries</h3>
//               <p>Concise summaries for exams.</p>
//             </div>
//             <div className="feature-box">
//               <h3>Solved PYQs</h3>
//               <p>Previous year solved questions.</p>
//             </div>
//           </div>
//         </div>

  

//         {/* RIGHT SIDE */}
// <div className="course-right">
//   <div className="price-card">

//     <img
//       src={course.img}
//       alt={course.courseName}
//       className="price-card-img"
//     />

//     <div className="price-row">
//       <span className="price-new">₹299</span>
//       <span className="price-old">₹499</span>
//       <span className="price-discount">40% off</span>
//     </div>

//     <div className="price-exclusive">
//       🔔 Exclusive for first 300 students!
//     </div>

//     <button
//       className="buy-btn"
//       onClick={() => setShowPayment(true)}
//     >
//       Buy Now
//     </button>

//     <p className="access-text">
//       Accessible till 31st August, 2024
//     </p>

//   </div>
// </div>

//       </section>

//       {/* COURSE CONTENT */}
//       <section className="course-content-section">
//         <h2 className="content-heading">Course Contents</h2>

//         {course.contents?.map((topic, index) => (
//           <div className="topic-card" key={index}>
//             <h3 className="topic-title">{topic.topicName}</h3>
//             {topic.subTopics?.map((sub, i) => (
//               <div className="subtopic-row" key={i}>
//                 {sub.name}
//               </div>
//             ))}
//           </div>
//         ))}
//       </section>

//     </div>
//   );
// };

// export default CoursePage;
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data";
import PaymentForm from "../Components/PaymentForm";
import "../index.css";

const CoursePage = () => {
  const { term, courseId } = useParams();

  const [showPayment, setShowPayment] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Flatten all courses
  const allCourses = courses.flatMap((termData) =>
    termData.courses.map((course) => ({
      ...course,
      term: termData.id,
    }))
  );

  // Find selected course
  const course = allCourses.find(
    (c) =>
      c.id.toLowerCase() === courseId.toLowerCase() &&
      c.term === term
  );

  // If course not found
  if (!course) {
    return (
      <div className="not-found-page">
        <h1>Course Not Found</h1>
        <Link to="/" className="orig-green-btn">
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="course-page">

      {/* PAYMENT MODAL */}
      {showPayment && (
        <PaymentForm
          courseId={course.id}
          title={course.courseName}
          onClose={() => setShowPayment(false)}
        />
      )}

      {/* TOP SECTION */}
      <section className="course-top-section">

        {/* LEFT SIDE */}
        <div className="course-left">

          <div className="breadcrumb">
            Courses &gt; Term {term} &gt; {course.courseName}
          </div>

          <h1 className="course-title">{course.courseName}</h1>

          <p className="course-created">
            Created By <span>{course.instructor}</span>
          </p>

          <div className="course-meta">
            <p>Last Updated 6th July 2024</p>
            <p>English with conversational Hindi</p>
          </div>

          <h2 className="about-author-title">About the author</h2>

          <p className="author-description">
            We provide top quality semester preparation content
            specially designed for law students. This course
            contains concise notes, case summaries, video lectures,
            and solved PYQs.
          </p>

          {/* FEATURES */}
          <div className="course-features">
            <div className="feature-box">
              <h3>Video Lectures</h3>
              <p>Easy to learn video lectures.</p>
            </div>
            <div className="feature-box">
              <h3>Lecture Notes</h3>
              <p>Comprehensive notes for learning.</p>
            </div>
            <div className="feature-box">
              <h3>Case Summaries</h3>
              <p>Concise summaries for exams.</p>
            </div>
            <div className="feature-box">
              <h3>Solved PYQs</h3>
              <p>Previous year solved questions.</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="course-right">
          <div className="price-card">

            <img
              src={course.img}
              alt={course.courseName}
              className="price-card-img"
            />

            <div className="price-row">
              <span className="price-new">₹299</span>
              <span className="price-old">₹499</span>
              <span className="price-discount">40% off</span>
            </div>

            <div className="price-exclusive">
              🔔 Exclusive for first 300 students!
            </div>

            <button
              className="buy-btn"
              onClick={() => setShowPayment(true)}
            >
              Buy Now
            </button>

            <p className="access-text">
              Accessible till 31st August, 2024
            </p>

          </div>
        </div>

      </section>
      {selectedVideo && (
  <div className="video-player">
    <iframe
      width="100%"
      height="400"
      src={selectedVideo}
      title="Video Player"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <button
      className="close-btn"
      onClick={() => setSelectedVideo(null)}
    >
      ✖ Close
    </button>
  </div>
)}

      {/* COURSE CONTENT */}
     <section className="course-content-section">
  <h2 className="content-heading">Course Contents</h2>

  {course.contents?.map((topic, index) => (
    <div className="topic-card" key={index}>

      {/* Topic Title */}
      <details>
        <summary className="topic-title">
          {topic.topicName}
        </summary>

        {/* Subtopics */}
        {topic.subTopics?.map((sub, i) => (
          <div key={i} className="subtopic-box">

            <p className="subtopic-title">
              • {sub.name} <span className="paid">(Paid)</span>
            </p>

            <ul className="subtopic-links">
              <li>
                <button
                  className="link-btn"
                  onClick={() => setSelectedVideo(sub.videoUrl)}
                >
                  🎥 Video Lecture
                </button>
              </li>

              <li className="notes-link">📄 Lecture Notes</li>

              <li className="updated-text">
                Last Updated: 3rd July 2024
              </li>
            </ul>

          </div>
        ))}
      </details>

    </div>
  ))}
</section>

    </div>
  );
};

export default CoursePage;