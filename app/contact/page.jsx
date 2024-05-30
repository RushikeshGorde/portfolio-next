"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectGroup } from "@radix-ui/react-select";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone: ",
    description: "(+91) 782 0879 747"
  },
  {
    icon: <FaEnvelope />,
    title: "Email: ",
    description: "rushikeshgorde1145@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address: ",
    description: "Balaji Nagar, Pune"
  },

];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[25px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-2 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent ">Let's work together</h3>

              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input type="fristname" placeholder="Fristname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Adress" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select  */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Developement</SelectItem>
                    <SelectItem value="cst">Back-End Developement</SelectItem>
                    <SelectItem value="mst">UI/UX Desine</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textareaa */}
              <Textarea
                className="h-[90px]"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
           <ul className="flex flex-col gap-10">
            {info.map((item, index)=> {
              return <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}
           </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );

};

export default Contact