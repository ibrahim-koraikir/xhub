import { useState, useEffect } from "react";
import { X, ExternalLink, Lock } from "lucide-react";

const CONFIG_URL =
  "https://raw.githubusercontent.com/ibrahim-koraikir/AhmedHytworker-AdsConfig/main/ad_networks.json";

interface Sponsor {
  name: string;
  url: string;
}

interface AdGateProps {
  open: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

export function AdGate({ open, onClose, onUnlock }: AdGateProps) {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [clicks, setClicks] = useState(0);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const REQUIRED_CLICKS = 3;

  // Fetch sponsors
  useEffect(() => {
    if (!open) return;
    fetch(CONFIG_URL)
      .then((r) => r.json())
      .then((data) => {
        setSponsors(data.networks || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [open]);

  // Handle countdown after all visited
  useEffect(() => {
    if (countdown === null || countdown <= 0) return;
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Auto-unlock when countdown finishes
  useEffect(() => {
    if (countdown === 0) {
      onUnlock();
    }
  }, [countdown, onUnlock]);

  // Inject Adsterra ad when modal opens
  useEffect(() => {
    if (!open) return;
    const container = document.getElementById('adgate-ad-container');
    if (!container || container.querySelector('ins')) return;

    const s1 = document.createElement('script');
    s1.async = true;
    s1.type = 'application/javascript';
    s1.src = 'https://a.magsrv.com/ad-provider.js';
    container.appendChild(s1);

    const ins = document.createElement('ins');
    ins.className = 'eas6a97888e37';
    ins.setAttribute('data-zoneid', '5831428');
    container.appendChild(ins);

    const s2 = document.createElement('script');
    s2.textContent = '(AdProvider = window.AdProvider || []).push({"serve": {}});';
    container.appendChild(s2);

    return () => { container.innerHTML = ''; };
  }, [open]);

  const handleClick = () => {
    if (sponsors.length > 0) {
      const sponsor = sponsors[clicks % sponsors.length];
      window.open(sponsor.url, "_blank", "noopener,noreferrer");
    }
    const newClicks = clicks + 1;
    setClicks(newClicks);

    // Start countdown after all required clicks
    if (newClicks >= REQUIRED_CLICKS) {
      setCountdown(3);
    }
  };

  const allClicked = clicks >= REQUIRED_CLICKS;
  const canContinue = allClicked && countdown === 0;

  if (!open) return null;

  const progressPct = Math.min((clicks / REQUIRED_CLICKS) * 100, 100);

  return (
    <>
      <style>{`
        .adgate-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(6px);
          animation: adgate-fadein 0.2s ease;
        }
        @keyframes adgate-fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .adgate-modal {
          position: relative;
          width: 100%;
          max-width: 480px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 16px;
          background: #1c1c24;
          color: #fff;
          box-shadow: 0 24px 80px rgba(0,0,0,0.7);
          animation: adgate-scalein 0.25s ease;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        .adgate-modal::-webkit-scrollbar {
          width: 4px;
        }
        .adgate-modal::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        @keyframes adgate-scalein {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .adgate-inner {
          padding: 32px 28px 28px;
        }
        .adgate-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.4);
          padding: 4px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }
        .adgate-close:hover {
          color: rgba(255,255,255,0.8);
        }

        /* Header */
        .adgate-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 24px;
        }
        .adgate-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          box-shadow: 0 8px 24px rgba(249,115,22,0.35);
        }
        .adgate-title {
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          letter-spacing: -0.3px;
        }
        .adgate-subtitle {
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
          margin: 0;
          line-height: 1.5;
        }

        /* Progress */
        .adgate-progress-section {
          margin-bottom: 20px;
        }
        .adgate-progress-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .adgate-progress-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .adgate-progress-count {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
        }
        .adgate-progress-track {
          height: 5px;
          border-radius: 99px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
          margin-bottom: 10px;
        }
        .adgate-progress-fill {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, #f97316, #ef4444);
          transition: width 0.6s ease;
        }
        .adgate-progress-dots {
          display: flex;
          gap: 6px;
        }
        .adgate-dot {
          flex: 1;
          height: 5px;
          border-radius: 99px;
          background: rgba(255,255,255,0.1);
          transition: background 0.4s ease;
        }
        .adgate-dot.visited {
          background: #f97316;
        }

        /* How to unlock box */
        .adgate-howto {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 20px;
        }
        .adgate-howto-title {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .adgate-howto-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #f97316;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .adgate-howto-dot::after {
          content: '';
          width: 5px;
          height: 5px;
          background: #f97316;
          border-radius: 50%;
        }
        .adgate-howto ol {
          margin: 0;
          padding-left: 18px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          line-height: 1.8;
        }
        .adgate-howto ol li strong {
          color: rgba(255,255,255,0.8);
          font-weight: 600;
        }

        /* Sponsor list */
        .adgate-sponsors {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .adgate-sponsor-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          text-align: left;
          color: #fff;
        }
        .adgate-sponsor-btn:not(.visited):hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
          transform: translateX(2px);
        }
        .adgate-sponsor-btn.visited {
          cursor: default;
          opacity: 0.65;
        }
        .adgate-sponsor-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.55);
        }
        .adgate-sponsor-btn.visited .adgate-sponsor-num {
          background: rgba(249,115,22,0.2);
          color: #f97316;
        }
        .adgate-sponsor-info {
          flex: 1;
          min-width: 0;
        }
        .adgate-sponsor-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .adgate-sponsor-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.38);
          display: block;
          margin-top: 1px;
        }
        .adgate-sponsor-icon {
          flex-shrink: 0;
          color: rgba(255,255,255,0.3);
          transition: color 0.2s;
        }
        .adgate-sponsor-btn:not(.visited):hover .adgate-sponsor-icon {
          color: rgba(255,255,255,0.65);
        }

        /* Countdown banner */
        .adgate-countdown {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(249,115,22,0.12);
          border: 1px solid rgba(249,115,22,0.3);
          margin-bottom: 16px;
          animation: adgate-pulse 1.2s ease-in-out infinite;
        }
        @keyframes adgate-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .adgate-countdown-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f97316, #ef4444);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
        }
        .adgate-countdown-text {
          font-size: 13.5px;
          color: rgba(255,255,255,0.8);
        }

        /* Loading */
        .adgate-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 0;
          gap: 14px;
        }
        .adgate-spinner {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 3px solid rgba(249,115,22,0.15);
          border-top-color: #f97316;
          animation: adgate-spin 0.8s linear infinite;
        }
        @keyframes adgate-spin {
          to { transform: rotate(360deg); }
        }
        .adgate-loading-text {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
        }

        /* Continue button */
        .adgate-continue-btn {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: not-allowed;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.3);
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          letter-spacing: 0.01em;
        }
        .adgate-continue-btn.ready {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          color: #fff;
          cursor: pointer;
          box-shadow: 0 6px 24px rgba(249,115,22,0.4);
        }
        .adgate-continue-btn.ready:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 32px rgba(249,115,22,0.55);
        }
        .adgate-continue-btn.ready:active {
          transform: translateY(0);
        }
        .adgate-mini-spinner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: rgba(255,255,255,0.6);
          animation: adgate-spin 0.8s linear infinite;
        }
      `}</style>

      <div className="adgate-overlay">
        <div className="adgate-modal">
          {/* Close button */}
          <button className="adgate-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>

          <div className="adgate-inner">
            {/* Header */}
            <div className="adgate-header">
              <div className="adgate-icon-wrap">
                <Lock size={26} color="#fff" />
              </div>
              <h2 className="adgate-title">Just {REQUIRED_CLICKS} clicks to download.</h2>
              <p className="adgate-subtitle">
                One last step — click the button {REQUIRED_CLICKS} times to unlock your download.
              </p>
            </div>

            {/* Loading state */}
            {loading && (
              <div className="adgate-loading">
                <div className="adgate-spinner" />
                <p className="adgate-loading-text">Loading sponsors...</p>
              </div>
            )}

            {/* Progress */}
            {!loading && (
              <div className="adgate-progress-section">
                <div className="adgate-progress-label-row">
                  <span className="adgate-progress-label">Progress</span>
                  <span className="adgate-progress-count">
                    {Math.min(clicks, REQUIRED_CLICKS)} / {REQUIRED_CLICKS}
                  </span>
                </div>
                <div className="adgate-progress-track">
                  <div
                    className="adgate-progress-fill"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <div className="adgate-progress-dots">
                  {Array.from({ length: REQUIRED_CLICKS }).map((_, i) => (
                    <div
                      key={i}
                      className={`adgate-dot${clicks > i ? " visited" : ""}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* How to unlock */}
            {!loading && (
              <div className="adgate-howto">
                <div className="adgate-howto-title">
                  <div className="adgate-howto-dot" />
                  How to unlock:
                </div>
                <ol>
                  <li>Click the button below — a new tab opens.</li>
                  <li>Close the tab and come back here.</li>
                  <li>
                    Repeat <strong>{REQUIRED_CLICKS} times</strong>, then wait <strong>3 seconds</strong> for
                    Continue to unlock.
                  </li>
                </ol>
              </div>
            )}

            {/* Single sponsor button */}
            {!loading && (
              <div className="adgate-sponsors">
                <button
                  onClick={handleClick}
                  disabled={allClicked}
                  className={`adgate-sponsor-btn${allClicked ? " visited" : ""}`}
                >
                  <div className="adgate-sponsor-num">
                    {allClicked ? "✓" : `${Math.min(clicks + 1, REQUIRED_CLICKS)}`}
                  </div>
                  <div className="adgate-sponsor-info">
                    <span className="adgate-sponsor-name">
                      {allClicked ? "Unlocked" : `Click ${Math.min(clicks + 1, REQUIRED_CLICKS)} of ${REQUIRED_CLICKS}`}
                    </span>
                    <span className="adgate-sponsor-sub">
                      {allClicked ? "Done" : clicks > 0 ? `${REQUIRED_CLICKS - clicks} more to go` : "Click to visit"}
                    </span>
                  </div>
                  {!allClicked && (
                    <ExternalLink size={16} className="adgate-sponsor-icon" />
                  )}
                </button>
              </div>
            )}

            {/* Countdown */}
            {allClicked && countdown !== null && countdown > 0 && (
              <div className="adgate-countdown">
                <div className="adgate-countdown-badge">{countdown}</div>
                <p className="adgate-countdown-text">
                  Download unlocking in <strong>{countdown}s</strong>…
                </p>
              </div>
            )}

            {/* Ad */}
            <div id="adgate-ad-container" style={{ margin: '16px 0', minHeight: 60 }} />

            {/* Continue button */}
            <button
              onClick={onUnlock}
              disabled={!canContinue}
              className={`adgate-continue-btn${canContinue ? " ready" : ""}`}
            >
              {canContinue ? (
                "Continue →"
              ) : (
                <>
                  <span className="adgate-mini-spinner" />
                  {allClicked
                    ? "Please wait…"
                    : `Click ${REQUIRED_CLICKS - Math.min(clicks, REQUIRED_CLICKS)} more time${REQUIRED_CLICKS - Math.min(clicks, REQUIRED_CLICKS) !== 1 ? "s" : ""}`}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
