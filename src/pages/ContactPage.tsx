import { PageHero } from "../components/ui/SectionHead";
import { PinIcon, PhoneIcon, MailIcon, ClockIcon } from "../components/icons/MarkIcons";
import ContactForm from "../components/contact/ContactForm";
import MapEmbed from "../components/contact/MapEmbed";

const SOCIAL_LINKS = ["IG", "FB", "X", "YT"];

export default function ContactPage() {
  return (
    <main>
      <PageHero crumb="CONTACT US" title="Get in touch">
        <p className="m-0">Reach the office directly, or send an enquiry and we'll reply within one working day.</p>
      </PageHero>

      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex gap-3.5 py-4 border-b border-rule">
              <PinIcon className="w-5.5 h-5.5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm mb-0.5">Address</h4>
                <p className="text-sm m-0">14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="flex gap-3.5 py-4 border-b border-rule">
              <PhoneIcon className="w-5.5 h-5.5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm mb-0.5">Phone</h4>
                <p className="text-sm m-0">
                  Admissions: 0800 123 4567
                  <br />
                  General enquiries: 0800 765 4321
                </p>
              </div>
            </div>
            <div className="flex gap-3.5 py-4 border-b border-rule">
              <MailIcon className="w-5.5 h-5.5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm mb-0.5">Email</h4>
                <p className="text-sm m-0">admissions@glorylaneschool.ng · info@glorylaneschool.ng</p>
              </div>
            </div>
            <div className="flex gap-3.5 py-4 border-b border-rule">
              <ClockIcon className="w-5.5 h-5.5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm mb-0.5">Office hours</h4>
                <p className="text-sm m-0">Monday–Friday, 8:00am–4:00pm. Closed public holidays and during term breaks.</p>
              </div>
            </div>

            <div className="flex gap-3.5 mt-4.5">
              {SOCIAL_LINKS.map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-rule rounded-full flex items-center justify-center text-xs font-bold text-green-dark hover:bg-sage"
                >
                  {label}
                </a>
              ))}
            </div>

            <MapEmbed />
          </div>

          <div>
            <h3 className="text-xl mb-4">Send an enquiry</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
