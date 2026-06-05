export default function Loading() {
  const randomNumber = 0.6;
  return (
    <div className="max-w-450 w-4/5 mx-auto pt-50 pb-50 font-poppins animate-pulse min-h-screen">
      <div className="flex flex-col gap-25">
        <div className="h-12 w-3/4 bg-neutral-600 rounded" />
        <div className="w-full aspect-[2.3] bg-neutral-600 rounded" />
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-4 bg-neutral-700 rounded"
              style={{ width: `${85 + randomNumber * 15}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
