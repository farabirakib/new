import StatisticsStats from "./StatisticsStats";

const StatisticsPage = () => {
  return (
    <>
      <section className="relative overflow-hidden flex flex-col items-center justify-center mt-10 md:mt-20 pt-8 pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3">
          Delivering Excellence
        </h1>

        <p className="px-4 md:px-2 text-gray-400 text-base sm:text-lg md:text-xl mx-auto mt-4 text-center leading-relaxed max-w-3xl">
          Key metrics that showcase our success and impact on businesses
          worldwide
        </p>
      </section>

     
      <StatisticsStats />
    </>
  );
};

export default StatisticsPage;
