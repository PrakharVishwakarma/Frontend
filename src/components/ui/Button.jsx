// /src/components/ui/Button.jsx

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {

    const baseStyles =
        "px-6 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer";

    const variants = {
        primary:
            "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20",

        secondary:
            "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",

        outline:
            "border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
    };

    return (
        <button
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}