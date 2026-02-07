const socials = [
  { link: "https://www.linkedin.com/in/soumakk/", name: "LinkedIn" },
  { link: "https://www.instagram.com/__soumak__/", name: "Instagram" },
  { link: "https://www.behance.net/soumakdutta6/", name: "Behance" },
  { link: "https://github.com/soumakk/", name: "GitHub" },
];

export default function Overlay() {
  return (
    <div className="absolute bottom-0 left-0 right-0 select-none text-white text-center pointer-events-none">
      <h1 className="instrument-serif-regular leading-none text-[10vw]">
        Soumak Dutta
      </h1>
      <h2 className="instrument-serif-regular  text-[3rem]">
        3D Designer & Developer
      </h2>
      <div className="flex items-center text-base gap-5 justify-center py-10 pointer-events-auto">
        {socials?.map((social) => (
          <a href={social.link} target="_blank" key={social.name}>
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}
