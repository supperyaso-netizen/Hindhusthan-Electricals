const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Electrician",
    text: "Best place for electrical supplies in Dindigul. Good rates and they always have what I need.",
    rating: 5,
  },
  {
    id: 2,
    name: "Muthu Selvan",
    role: "Homeowner",
    text: "Got all the wiring and switches for my new house here. Helpful staff, fair prices.",
    rating: 5,
  },
  {
    id: 3,
    name: "Saravanan",
    role: "Contractor",
    text: "I buy in bulk for my projects. They never delay and the quality is always good.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="reviews">
      <div className="container">
        <div className="testimonials-layout">
          <div className="testimonials-header">
            <span className="eyebrow reveal">What People Say</span>
            <h2 className="reveal reveal-delay-1">Customer reviews</h2>
            <p className="reveal reveal-delay-2">Hear from the people who shop with us regularly.</p>
          </div>

          <div className="testimonials-list">
            {reviews.map((review, i) => (
              <div key={review.id} className={`testimonial-item reveal reveal-delay-${i + 1}`}>
                <div className="testimonial-accent" aria-hidden="true" />
                <div className="testimonial-content">
                  <div className="testimonial-stars">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="testimonial-text">{review.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="testimonial-name">{review.name}</p>
                      <p className="testimonial-role">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
