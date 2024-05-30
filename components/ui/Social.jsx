import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/RushikeshGorde' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/rushikesh-gorde-a8a39a259' },
    { icon: <FaWhatsapp />, path: 'https://wa.me/7820879747' },
    { icon: <FaInstagram />, path: '"https://instagram.com/rushikesh_gorde_1145?igshid=NTc4MTIwNjQ2YQ==' },
]
const Social = ({ constainerStyles, iconStyles }) => {
    return <div className={constainerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>;

};

export default Social