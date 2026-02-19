import Link from "next/link";
import Image from "next/image";

const imageSizes = "max-w-full w-full max-h-[420px] object-contain rounded-xl";

export default function IoTMailboxPost() {
  return (
    <main className="md:container select-none font-johnston flex items-start justify-center min-h-screen pt-16 pb-20">
      <div className="w-11/12 md:max-w-[720px]">
        <article className="space-y-10">
          <nav className="text-sm">
            <Link href="/blog" className="hover:underline text-gray-400">← Back to Blog</Link>
          </nav>

          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              A way to send printed messages over long distance
            </h1>
            <div className="text-sm text-gray-500">Published: 2025-11-18</div>
          </header>

          <section className="prose prose-invert prose-headings:font-semibold prose-headings:text-white max-w-none space-y-8 text-base md:text-lg text-gray-200 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl mt-0 mb-2">Overview</h2>
              <p className="mb-0">
                I figured I should document probably the coolest thing I have ever worked on, a Raspberry Pi mailbox to send messages back
                and forth with my girlfriend. It uses a web portal with Express/Node.js to send messages back and forth between two internet connected thermal printers.
              </p>
              <p className="mb-0">
                The idea for this stemmed from her fascination with our mailboxes on one of her visits to the US from Ireland.
                In Ireland, they don&apos;t have two-way mail delivery on your home mailbox, you either drop outgoing mail at a green An Post box, or at the post office.
                I wanted to find a way to implement that in a gift for her birthday in 2025, and mimic the American mailbox experience.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl mt-0 mb-2">What I used (per printer)</h2>
              <ul className="space-y-1.5 pl-5 list-disc my-0">
                <li>Raspberry Pi Zero 2W</li>
                <li>Limit switches</li>
                <li>58mm thermal printer (with USB interface)</li>
                <li>3D-printed mailbox housing</li>
                <li>USB-A to MicroUSB cable</li>
                <li>5V power supply (for printer)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl mt-0 mb-2">Detailed functionality</h2>
              <p className="mb-0">
                My girlfriend&apos;s end of the setup is much more interesting than mine. I 3D printed a toy mailbox model from
                Printables and added a hole to the back for wiring before printing.
              </p>
              <p className="mb-0">
                The general idea is that she types a message on my web portal and it&apos;s stored in MongoDB to be sent when she
                flips the flag on the mailbox which triggers a limit switch I&apos;ve attached inside the mailbox housing.
              </p>
              <p className="mb-0">
                My side of the mailbox is just the guts, a printer and RPi with no switch.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl mt-0 mb-2">Setup</h2>
              <p className="mb-0">
                This section documents how I set up the mailbox end to end.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl mt-6 mb-2">Mailbox assembly</h3>
                <p className="mb-0">
                  I started by 3D printing a small toy mailbox and modifying the model to allow
                  wiring to pass through the back. Inside, I mounted a limit switch connected to
                  the flag so that flipping it would trigger sending to the opposite printer.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl mt-6 mb-2">Raspberry Pi setup</h3>
                <p className="mb-0">
                  Each printer system uses a Raspberry Pi Zero 2W with the full RPi OS. I&apos;m running them headless
                  so I was using VNCViewer on my Mac to access them over local Wi-Fi on setup.
                </p>
                <p className="mb-0">
                  I also had to make sure they worked before I left to deliver them in Ireland, so I set up my
                  girlfriend&apos;s with her internet to work as soon as I plugged it in.
                </p>
                <p className="mb-0">
                  There&apos;s some basic terminal command I had to run to get the Python script to work on startup,
                  just to minimize setup and in case she ever moves the mailbox, her power goes out, etc.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl mt-6 mb-2">Thermal printer</h3>
                <p className="mb-0">
                  The printer is a standard 58mm USB thermal printer. I had to mess with text formatting a bit to get it to work
                  the way that I wanted it to (with a little YOU&apos;VE GOT MAIL heading).
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl mt-6 mb-2">Flag switch</h3>
                <p className="mb-0">
                  The flag switch was a little annoying as I ordered the incorrect cables and needed to MacGyver them to work.
                  I ended up just using electrical tape and praying it wouldn&apos;t come undone in transit.
                </p>
                <p className="mb-0">
                  These were connected to GPIO pins 6 and GND, and worked perfectly.
                </p>
                <figure className="my-8 flex flex-col items-center gap-2">
                  <Image
                    src="/images/switch_wiring.jpeg"
                    alt="flag switch wiring setup"
                    width={800}
                    height={420}
                    className={`${imageSizes} bg-gray-800/50`}
                  />
                </figure>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl mt-6 mb-2">Backend connection</h3>
                <p className="mb-0">
                  The Pi periodically checks a small Express backend for new messages. When a message
                  is available on my MongoDB database, it prints and marks it as delivered so it won&apos;t be reprinted.
                </p>
                <p className="mb-0">
                  The web portal I just deployed with Render on top of my portfolio site.
                </p>
                <figure className="my-8 flex flex-col items-center gap-2">
                  <Image
                    src="/images/webpage.png"
                    alt="web portal screenshot"
                    width={800}
                    height={420}
                    className={imageSizes}
                  />
                </figure>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl mt-6 mb-2">Final testing</h3>
                <p className="mb-0">
                  Since the mailbox would be completely inaccessible to me once I left Ireland, I needed to test this setup fully.
                </p>
                <p className="mb-0">
                  Once everything was assembled, I tested message delivery in various scenarios. For example,
                  I tested startup functionality by queuing a message on the web portal and then plugging in the Pi.
                </p>
                <p className="mb-0">
                  I also tested the web portal out by queuing a message via a different internet connection to make sure everything worked
                  and wasn&apos;t still running the web server locally like how it was before I figured out the backend.
                </p>
                <figure className="my-8 flex flex-col items-center gap-2">
                  <Image
                    src="/images/message.jpeg"
                    alt="printed message"
                    width={800}
                    height={420}
                    className={`${imageSizes} bg-gray-800/50`}
                  />
                </figure>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
