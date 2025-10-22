import React from 'react'
import { Users, Trophy, Sparkles } from "lucide-react";

const FeatureCard = () => {
    const Features = ({ Icon, title, description }) => (
      <div className="w-full md:w-1/3">
        {/* Converted: py-lg-5 p-4 -> p-4 lg:py-12 */}
        <div className="text-center p-8 lg:py-12">
          <div className="mb-4">
            {/* Lucide Icon usage: w-8 h-8 for size 32, text-blue-600 for primary color */}
            <Icon className="w-8 h-8 mx-auto text-teal-500"/>
          </div>
          <div>
            <h4 className="text-md  font-bold text-gray-800">{title}</h4>
            <p className="mb-0 text-gray-600 lg:text-sm text-xs">{description}</p>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <section className='my-10 p-3'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap border bg-gray-200/30 border-gray-200 divide-y divide-gray-200 md:divide-x md:divide-y-0">
            <Features
              Icon={Users} // Lucide equivalent for bi-people-fill
              title="Expert Team"
              description="Vivamus eget neque lacus. Pellentesque egauris ex."
            />

            <Features
              Icon={Trophy} // Lucide equivalent for bi-trophy-fill
              title="Award winning agency"
              description="Lorem ipsum, dolor sit amet consectetur elitorceat ."
            />

            <Features
              Icon={Sparkles} // Lucide equivalent for bi-stars
              title="10 Year Exp."
              description="Pellen tesque eget, mauris lorem iupsum neque lacus."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureCard