import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Architectural Metalwork',
    href: '/projects/architectural-metalwork',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/images/6893291521bf6f6827bef3db_Project_201-5.webp',
  },
  {
    id: 2,
    name: 'Sheet Metal Creations',
    href: '/projects/sheet-metal-creations',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/images/689328ba60ac29ba63b811f0_Project_202-6.webp',
  },
  {
    id: 3,
    name: 'Custom Machine Parts',
    href: '/projects/custom-machine-parts',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/images/689329702264f671e2d3822c_Project_203-7.webp',
  },
];

const ProjectsList = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-[60px] pb-5 border-b border-border">
          <div className="max-w-[480px]">
            <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-medium leading-[1.2] tracking-[-0.01em] text-foreground">
              Projects.
            </h2>
          </div>
          <div className="max-w-[500px] mt-6 lg:mt-0">
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-muted-foreground">
              We combine precision engineering with hands-on craftsmanship to bring your designs to life in steel, metal, and beyond.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 border-b border-border transition-colors hover:bg-white/50 dark:hover:bg-white/5"
            >
              {/* Project Info & Reveal Image */}
              <a
                href={project.href}
                className="flex-1 flex items-center justify-between w-full"
              >
                <div className="text-[24px] sm:text-[32px] font-medium text-foreground transition-transform duration-300 sm:group-hover:translate-x-4">
                  {project.name}
                </div>

                {/* Hover Reveal Image */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 scale-75 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 z-10 hidden lg:block">
                  <div className="relative w-[320px] h-[200px] rounded-[10px] overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>

              {/* Action Button */}
              <div className="flex items-center mt-6 sm:mt-0 sm:ml-8 w-full sm:w-auto">
                <a
                  href="/clients"
                  className="flex items-center justify-center gap-3 bg-background border border-border rounded-full px-6 py-3 transition-all hover:bg-primary hover:border-primary w-full sm:w-auto"
                >
                  <span className="text-[15px] font-semibold text-foreground">
                    Learn more
                  </span>
                  <div className="w-[18px] h-[18px] flex items-center justify-center">
                    <img 
                      src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4/688b32a64d16109629c8c8d0_Button%20Arrow.svg" 
                      alt="Arrow" 
                      className="w-4 h-4 dark:invert"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-20 sm:mt-[120px]">
          <div className="flex flex-col">
            <div className="text-[48px] sm:text-[72px] font-medium leading-[1.0] text-foreground mb-2">15+</div>
            <p className="text-[13px] sm:text-[15px] font-medium text-muted-foreground tracking-wide uppercase">Years of Metal Experience</p>
          </div>
          <div className="flex flex-col">
            <div className="text-[48px] sm:text-[72px] font-medium leading-[1.0] text-foreground mb-2">98%</div>
            <p className="text-[13px] sm:text-[15px] font-medium text-muted-foreground tracking-wide uppercase">Client Satisfaction Across</p>
          </div>
          <div className="flex flex-col">
            <div className="text-[48px] sm:text-[72px] font-medium leading-[1.0] text-foreground mb-2">5k+</div>
            <p className="text-[13px] sm:text-[15px] font-medium text-muted-foreground tracking-wide uppercase">Tons of Steel Processed</p>
          </div>
          <div className="flex flex-col">
            <div className="text-[48px] sm:text-[72px] font-medium leading-[1.0] text-foreground mb-2">100%</div>
            <p className="text-[13px] sm:text-[15px] font-medium text-muted-foreground tracking-wide uppercase">Tailored to Every Need</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;