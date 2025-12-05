export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Simple geometric logo with initials */}
      <div className="relative w-10 h-10">
        {/* Outer border */}
        <div className="absolute inset-0 border-2 border-tech-blue rounded-lg rotate-45" />
        {/* Inner content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-tech-blue">NSK</span>
        </div>
      </div>
      <span className="font-semibold text-lg hidden sm:block">Nixon See</span>
    </div>
  )
}
