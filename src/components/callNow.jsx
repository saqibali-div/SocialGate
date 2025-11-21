import react from "react";

export default function CallNowButton({ phone = "+923195345759" }) {
  const href = `tel:${phone}`;
  return (
    <div className="mt-8 w-full flex justify-center ">
      <a
        href={href}
        className="relative px-8 py-3 rounded-xl font-semibold text-gray-900 shadow-lg 
            border border-white/40 backdrop-blur-md bg-gradient-to-br from-white/90 to-white/60
            hover:from-white hover:to-gray-100 
            hover:shadow-xl hover:scale-[1.05]
            transition-all duration-300 w-full max-w-[80%] text-center"
      >
        📞 call now
      </a>
    </div>
  );
}
