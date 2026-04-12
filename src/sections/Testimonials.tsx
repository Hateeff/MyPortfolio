import memojiAvatar1 from "@/assets/images/AljoufM.png";
import memojiAvatar2 from "@/assets/images/AljoufCluster.jpg";
import memojiAvatar3 from "@/assets/images/newH.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Intern - SQL Programmer",
    position: "Al-Jawf Municipality, IT Department",
    text: "Trained in database design and management, including building tables, defining relationships, and ensuring data integrity, along with hands-on experience in IT operations and basic network support",
    avatar: memojiAvatar1,
  },
  {
    name: "Volunteer - Data Entry & Records Management",
    position: "Aljouf Health Cluster, Patient Affairs",
    text: "Facilitated patient affairs at Prince Mutaib Bin Abdulaziz Hospital by managing medical reports, sick leave certifications, and patient records using integrated hospital information systems (HIS)",
    avatar: memojiAvatar2,
  },
    {
    name: "Position - IT Trainer",
    position: "New Horizon Institute, Training Department",
    text: "",
    avatar: memojiAvatar3,
  },
];
export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader eyebrow="Practical Experience" title="Professional Experience"
     description="A collection of my practical experiences gained through work, training, and volunteering"/>

    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
          {testimonials.map(testimonial => (
        <Card key={testimonial.name} 
        className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
        <div className="flex gap-4 items-center">
          <div className="size-16 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0"> 
         <Image src={testimonial.avatar} alt={testimonial.name}
          className="max-h-full"/>
          </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-white/40">{testimonial.position}</div>
        </div>
      </div>  
      <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
        </Card>
      ))}
       </Fragment>
        ))]}
      </div>
    </div>
  </div>  
</div>
);
};
