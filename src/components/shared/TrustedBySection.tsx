const TrustedCompanies = () => {
  const logos = [
    {
      name: "Apple",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Netflix",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "YouTube",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    },
    {
      name: "Spotify",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
    {
      name: "LinkedIn",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
    },
    {
      name: "Instagram",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    },
    {
      name: "Google",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 overflow-hidden text-center mt-10 md:mt-20">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Trusted by Leading Companies
        </h2>
        <p className="text-gray-400 text-lg">
          Join thousands of businesses that trust us worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee marquee whitespace-nowrap items-center gap-20 py-6">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo.url}
              alt={logo.name}
              className="h-10 md:h-10 w-auto 
                         grayscale opacity-60 
                         hover:grayscale-0 hover:opacity-100 
                         hover:scale-110 
                         transition-all duration-500 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedCompanies;
