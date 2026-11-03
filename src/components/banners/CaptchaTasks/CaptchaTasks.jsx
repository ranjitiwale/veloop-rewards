
import { useState } from 'react';

import {
  ShieldCheck,
  CheckCircle2,
  LockKeyhole,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';

import styles from './CaptchaTasks.module.css';

function CaptchaTasks() {
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerified(!verified);
  };

  return (
    <section
      id="captcha-tasks"
      className={styles.banner}
    >

      {/* LEFT CONTENT */}
      <div className={styles.content}>

        <span className={styles.tag}>
          <ShieldCheck size={15} />
          SECURE REWARD ACTIVITIES
        </span>

        <h2>
          Simple tasks.
          <br />
          <span>Earn with confidence.</span>
        </h2>

        <p className={styles.description}>
          Complete eligible captcha activities and
          participate in simple reward opportunities
          through a secure experience.
        </p>

        <button
          className={styles.cta}
          onClick={handleVerify}
        >
          {verified ? 'Verification Complete' : 'Try Verification'}

          {verified ? (
            <CheckCircle2 size={18} />
          ) : (
            <ArrowRight size={18} />
          )}
        </button>

        <div className={styles.trust}>
          <LockKeyhole size={15} />
          <span>Designed for a simple and secure experience</span>
        </div>

      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>

        <div className={styles.glow}></div>

        <div className={styles.ring}></div>

        <div className={styles.securityIcon}>
          <ShieldCheck size={76} strokeWidth={1.25} />
          <div className={styles.checkBadge}>
            <CheckCircle2 size={23} />
          </div>
        </div>

        <div className={styles.verifyCard}>

          <div className={styles.verifyHeader}>
            <div>
              <span>SECURITY CHECK</span>
              <strong>Human Verification</strong>
            </div>

            <RefreshCw size={17} />
          </div>

          <button
            className={styles.checkboxRow}
            onClick={handleVerify}
            aria-pressed={verified}
          >
            <span className={styles.checkbox}>
              {verified && <CheckCircle2 size={19} />}
            </span>

            <span>
              {verified
                ? 'Verification completed'
                : "I'm not a robot"}
            </span>

            <div className={styles.captchaLogo}>
              <ShieldCheck size={23} />
              <small>VERIFY</small>
            </div>
          </button>

          <div className={styles.verifyFooter}>
            <span>
              {verified ? 'Demo verification successful' : 'Secure demo interaction'}
            </span>
            <LockKeyhole size={13} />
          </div>

        </div>

        <div className={styles.floatingLabel}>
          <Sparkles size={15} />
          Secure & Simple
        </div>

        <div className={styles.sparkleOne}>
          <Sparkles size={22} />
        </div>

        <div className={styles.sparkleTwo}>
          <ClipboardCheck size={20} />
        </div>

      </div>

      {/* BOTTOM FEATURES */}
      <div className={styles.features}>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <ClipboardCheck size={19} />
          </div>
          <div>
            <strong>Choose Tasks</strong>
            <span>Explore available activities</span>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <CheckCircle2 size={19} />
          </div>
          <div>
            <strong>Complete</strong>
            <span>Follow task instructions</span>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <ShieldCheck size={19} />
          </div>
          <div>
            <strong>Get Verified</strong>
            <span>Check eligible rewards</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default CaptchaTasks;
