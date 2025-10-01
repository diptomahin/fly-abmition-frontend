import React from "react";
import { Users, TrendingUp, Globe, Building, Plane } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // optional for scroll trigger

const Statistics = () => {
  const stats = [
    { number: 3784, label: "Workers Placed", icon: Users, suffix: "+" },
    { number: 132, label: "Partner Companies", icon: Building, suffix: "+" },
    { number: 25, label: "Countries", icon: Globe, suffix: "+" },
    { number: 95, label: "Success Rate", icon: TrendingUp, suffix: "%" },
  ];
  return (
    <div className="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-2">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const [ref, inView] = useInView({ triggerOnce: true });

          return (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              ref={ref}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <IconComponent className="w-6 h-6 text-[#4f2e89]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={10} // lasts 5 seconds
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
