import React from 'react'
import CountUp from "react-countup";

const EduStatistics = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
  {[
    { number: 10000, suffix: "+", label: "Students Guided" },
    { number: 200, suffix: "+", label: "University Partners" },
    { number: 20, suffix: "+", label: "Countries" },
    { number: 95, suffix: "%", label: "Visa Success Rate" },
  ].map((stat, index) => (
    <div
      key={index}
      className="text-center"
      data-aos="zoom-in"
      data-aos-delay={index * 150}
    >
      <div className="text-3xl font-bold mb-1">
        <CountUp
          end={stat.number}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />
        {stat.suffix}
      </div>
      <div className="text-white/80 text-sm">{stat.label}</div>
    </div>
  ))}
</div>
  )
}

export default EduStatistics
