// src/components/common/SectionTitle.jsx

export default function SectionTitle({
    badge,
    title,
    description
}) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">

            <p
                className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-indigo-500/10
                    border
                    border-indigo-500/20
                    text-indigo-400
                    text-sm
                    mb-5
                "
            >
                {badge}
            </p>

            <h2
                className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    leading-tight
                "
            >
                {title}
            </h2>

            <p
                className="
                    mt-6
                    text-slate-400
                    text-lg
                    leading-relaxed
                "
            >
                {description}
            </p>

        </div>
    );
}