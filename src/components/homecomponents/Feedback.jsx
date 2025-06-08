import { Star } from "lucide-react";

const feedbacks = [
  {
    rating: 5,
    text: "Amazing app! I use it every day. The UI is clean and fast.Amazing app! I use it every day. The UI is clean and fast.Amazing app! I use it every day. The UI is clean and fast.",
    user: "Navin Malakar",
    app: "MilBaithk",
    emoji: "🧑‍💻",
  },
  {
    rating: 4,
    text: "Great for project submissions, super helpful.Great for project submissions, super helpful.Great for project submissions, super helpful.",
    user: "Pooja Sharma",
    app: "SoldierCare",
    emoji: "👩‍🎓",
  },
  {
    rating: 5,
    text: "Love the simplicity and speed. I use it daily.Love the simplicity and speed. I use it daily.Love the simplicity and speed. I use it daily.",
    user: "Ravi Kumar",
    app: "HVSC Store",
    emoji: "👨‍🔧",
  },
];

export default function FeedbackSlider() {
  return (
    <div className="overflow-hidden py-10 ">

      <div className="flex justify-center items-center mb-8">
        <h1 className="text-5xl italic text-gray-800 inline-block border-b-4 border-green-800 pb-2">
            Testimonials
        </h1>
    </div>

      <div className="flex w-max animate-marquee gap-6">
        {[...feedbacks, ...feedbacks].map((fb, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm h-[340px] bg-white rounded-3xl shadow-md p-6 flex flex-col justify-between border border-gray-400"
          >
            <div className="flex justify-center mb-4">
              {Array.from({ length: fb.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-700 text-sm mb-4 text-center leading-relaxed">
              {fb.text}
            </p>

            <hr className="border-t border-gray-200 mb-4" />

            <div className="flex  items-center justify-center text-center">
              <div className="text-3xl mb-1">{fb.emoji}</div>
             <div>
              <p className="font-semibold text-gray-800">{fb.user}</p>
              <p className="text-xs text-gray-500 italic">{fb.app}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
