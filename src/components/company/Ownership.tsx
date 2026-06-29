export default function Ownership() {
  return (
    <section
      id="ownership"
      className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold">
        Ownership
      </h2>

      <p className="mt-2 text-gray-500">
        Estimated ownership distribution.
      </p>

      <div className="mt-10 flex justify-center">

        <div className="relative h-64 w-64">

          <div className="absolute inset-0 rounded-full border-[22px] border-pink-500"></div>

          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-inner" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

            <p className="text-sm text-gray-500">
              Valuation
            </p>

            <h3 className="text-3xl font-bold">
              $90B
            </h3>

          </div>

        </div>

      </div>

      <div className="mt-10 space-y-3">

        <div className="flex justify-between">
          <span>Founders</span>
          <span>28%</span>
        </div>

        <div className="flex justify-between">
          <span>Investors</span>
          <span>46%</span>
        </div>

        <div className="flex justify-between">
          <span>Employees</span>
          <span>18%</span>
        </div>

        <div className="flex justify-between">
          <span>Others</span>
          <span>8%</span>
        </div>

      </div>

    </section>
  );
}