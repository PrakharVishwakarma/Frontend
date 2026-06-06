// src/components/landing/FeatureCard.jsx

export default function FeatureCard({
    icon: Icon,
    title,
    description
}) {
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/60
                backdrop-blur-xl
                p-8
                hover:border-indigo-500/40
                transition-all
                duration-500
                hover:-translate-y-2
            "
        >

            <div
                className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-indigo-500/10
                    flex
                    items-center
                    justify-center
                    text-indigo-400
                    text-2xl
                    mb-6
                    group-hover:scale-110
                    transition
                "
            >
                <Icon />
            </div>

            <div
                className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-linear-to-br
                    from-indigo-500/10
                    to-cyan-500/5
                "
            />

            <h3 className="text-2xl font-semibold mb-4">
                {title}
            </h3>

            <p className="text-slate-400 leading-relaxed">
                {description}
            </p>

        </div>
    );
}