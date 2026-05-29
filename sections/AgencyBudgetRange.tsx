const AgencyBudgetRange = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 max-lg:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans bg-brand-orange py-12 max-md:py-5 md:max-lg:py-8 content-clip-both">
        <div className="flex flex-col items-center gap-15 max-lg:gap-10">
          <span className="capitalize font-calSans text-4xl max-md:text-2xl md:max-lg:text-4xl mx-auto">
            Built for real budgets
          </span>
          <div className="flex flex-col items-center gap-5 max-lg:gap-3">
            <span className="font-poppins font-light text-2xl max-md:text-sm md:max-lg:text-lg">
              Most of our agency collaborations fall in the
            </span>
            <div className="text-6xl md:max-lg:text-4xl font-calSans max-md:text-4xl flex flex-row md:gap-1.5 max-md:flex-col items-center">
              <span>$5,000-$10,000</span>
              <span>project range</span>
            </div>
            <span className="font-poppins font-light text-2xl max-md:text-sm md:max-lg:text-lg">
              or structured monthly reatiners.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyBudgetRange;
