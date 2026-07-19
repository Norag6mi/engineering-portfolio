import Section from "@/components/layout/Section";
import ContactCard from "@/components/contact/ContactCard";

export default function Contact() {
  return (
    <Section id="contact">

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
        07 / CONTACT
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold">
        Let's build scalable software, intelligent systems, and impactful products together.
      </h2>

      <p className="mt-8 max-w-3xl leading-8 text-muted">
        I'm currently seeking opportunities in Backend Engineering,
        Full-Stack Development, and Unity Software Engineering.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">

        <ContactCard
          title="Availability"
          value="Open to Full-Time Opportunities"
        />

        <ContactCard
          title="Location"
          value="Kolkata, India"
          href= "https://www.google.com/maps/search/kolkata%2C+India/?hl=en"
        />

        <ContactCard
          title="Email"
          value="dassyanatan0444@gmail.com"
          href="mailto:dassyanatan0444@gmail.com"
        />

        <ContactCard
          title="GitHub"
          value="My GitHub Profile"
          href="https://github.com/Norag6mi"
        />

        <ContactCard
          title="LinkedIn"
          value="My LinkedIn Profile"
          href="https://www.linkedin.com/in/sayantan-das-396b863b3/"
        />

        <ContactCard
          title="Resume"
          value="Download Resume"
          href="https://drive.google.com/file/d/1mGf06otQkZVFNcEDXd5gKYe6Zsm6FjhS/view?usp=sharing"
        />

      </div>

    </Section>
  );
}