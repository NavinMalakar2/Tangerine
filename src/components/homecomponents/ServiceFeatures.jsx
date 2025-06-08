import { FaUtensils, FaSmile, FaHome } from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils className="text-2xl text-black" />,
    title: "Authentic Flavors",
    description: "Savor the true taste of the Philippines with our authentic flavors",
    bg: "bg-orange-400",
  },
  {
    icon: <FaHome className="text-2xl text-black" />,
    title: "Homemade Delights",
    description: "Savor the comforting taste of homemade delights crafted with love",
    bg: "bg-yellow-300",
  },
  {
    icon: <FaSmile className="text-2xl text-black" />,
    title: "Friendly Atmosphere",
    description: "Experience the warmth of our friendly atmosphere as you dine with us",
    bg: "bg-green-500",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 mt-3 mb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((item, index) => (
          <div key={index} className="relative px-4">
            {/* Divider (only between cards) */}
            {index !== 0 && (
              <div className="hidden md:block absolute top-0 bottom-0 left-0 w-px bg-gray-300"></div>
            )}
            {/* Icon */}
            <div className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full ${item.bg} mb-4`}>
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            {/* Description */}
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
