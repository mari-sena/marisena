import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Responsive Design",
    description:
      "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
    isActive: true,
  },
  {
    id: "02",
    title: "CMS Development",
    description:
      "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
    isActive: false,
  },
  {
    id: "03",
    title: "API Integrations",
    description:
      "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
    isActive: false,
  },
  {
    id: "04",
    title: "Website Redesign",
    description:
      "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
    isActive: false,
  },
];

const QualityServices: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#483527] text-[#2d1d1b] font-sans">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#fcde93] mb-2">
          My Quality Services
        </h2>
        <p className="text-[#e0cfc7] max-w-2xl mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>

      <div className="space-y-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-4 border border-[#2d1d1b] rounded-xl px-8 py-6 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl ${
              service.isActive
                ? "bg-gradient-to-r from-[#c5958e] to-[#a5827d] text-white"
                : "bg-transparent"
            }`}
          >
            <div className="flex items-start gap-4 w-full">
              <div
                className={`text-sm font-bold ${
                  service.isActive ? "text-white" : "text-[#fcde93]"
                }`}
              >
                {service.id}
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    service.isActive ? "text-white" : "text-[#f4e2d8]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm ${
                    service.isActive ? "text-white/90" : "text-[#e0cfc7]"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <ArrowRight
                className={`w-5 h-5 ${
                  service.isActive ? "text-white" : "text-[#f4e2d8]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualityServices;
