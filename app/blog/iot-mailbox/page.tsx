import Link from "next/link";

export default function IoTMailboxPost() {
  return (
    <main className="md:container select-none font-johnston flex items-start justify-center min-h-screen pt-16 pb-16">
      <div className="w-11/12 md:w-3/4">
        <article>
          <nav className="text-sm mb-4">
            <Link href="/blog" className="hover:underline">← Back to Blog</Link>
          </nav>

          <h1 className="text-3xl font-bold">IoT Mailbox — How I Built It</h1>
          <div className="text-sm text-gray-600 mt-2 mb-6">Published: 2025-11-18</div>

          <section className="prose prose-invert text-sm text-gray-200">
            <h2>Overview</h2>
            <p>
              This post documents the IoT mailbox I built to notify me when mail arrives. It covers the hardware
              selection, wiring, firmware, the backend that aggregates events, and deployment notes.
            </p>

            <h2>What I used</h2>
            <ul>
              <li>ESP32 development board (Wi‑Fi)</li>
              <li>Magnetic reed switch (or a small hall effect sensor)</li>
              <li>Small enclosure and mounting hardware</li>
              <li>Lightweight backend (Node.js/Express or serverless function)</li>
            </ul>

            <h2>Wiring</h2>
            <p>
              The reed switch sits on the mailbox door and connects to a GPIO on the ESP32 with a pull‑up. When the
              door opens the circuit changes and the ESP32 detects the transition.
            </p>

            <h2>Firmware</h2>
            <p>Basic firmware logic:</p>
            <ol className="mono p-3 bg-card-bg rounded list-decimal list-inside">
              <li>Initialize Wi‑Fi</li>
              <li>Connect to backend via HTTPS POST</li>
              <li>Read sensor state on interrupt</li>
              <li>Debounce and send a single event per open</li>
              <li>Optionally include RSSI / battery info</li>
            </ol>

            <h2>Backend</h2>
            <p>
              The backend accepts events and can either send push notifications (Pushover/Pushbullet) or store a
              timeline of events. For a simple self-hosted deploy I used a small Express endpoint behind a reverse
              proxy and stored events in a tiny JSON file or SQLite DB.
            </p>

            <h2>Deployment notes</h2>
            <p>
              Make sure the ESP32 reconnects gracefully and has an exponential backoff for Wi‑Fi. Secure the
              endpoint with a simple token or use mutually validated TLS if you expose it publicly.
            </p>

            <h2>Lessons & Next Steps</h2>
            <ul>
              <li>Add OTA updates for firmware convenience.</li>
              <li>Include a small battery monitor to detect low power.</li>
              <li>Log raw events and provide a web UI for the timeline.</li>
            </ul>

            <p className="mt-6">If you'd like, I can expand this into a full post with circuit diagrams, code snippets, and a deploy guide.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
