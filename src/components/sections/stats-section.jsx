import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: "15+",
      label: "Years of Experience"
    },
    {
      value: "250+",
      label: "Completed Projects"
    },
    {
      value: "100%",
      label: "Client Satisfaction"
    },
    {
      value: "50+",
      label: "Expert Team Members"
    }
  ];

  return (
    <section className="bg-foreground py-12 sm:py-20 text-background">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1280px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
                {stat.value}
              </span>
              <span className="text-[14px] sm:text-[16px] md:text-lg text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
