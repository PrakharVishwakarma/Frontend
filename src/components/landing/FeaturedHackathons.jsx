// src/components/landing/FeaturedHackathons.jsx

import Container from "../common/Container";

import SectionTitle from "../common/SectionTitle";

import HackathonCard from "./HackathonCard";

import { featuredHackathons } from "../../mock/landingData";

export default function FeaturedHackathons() {
    return (
        <section className="py-24">

            <Container>

                <SectionTitle
                    badge="Featured Events"
                    title="Explore Trending Hackathons"
                    description="
                        Discover exciting hackathons from top communities,
                        universities, and organizations worldwide.
                    "
                />

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >

                    {featuredHackathons.map((hackathon) => (
                        <HackathonCard
                            key={hackathon.id}
                            {...hackathon}
                        />
                    ))}

                </div>

            </Container>

        </section>
    );
}