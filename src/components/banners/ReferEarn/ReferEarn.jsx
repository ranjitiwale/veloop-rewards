import { useState } from 'react';
import {
  Gift,
  Users,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

import styles from './ReferEarn.module.css';

function ReferEarn() {
  const [copied, setCopied] = useState(false);

  const referralCode = 'VELOOP2026';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <section className={styles.banner}>

      <div className={styles.content}>

        <span className={styles.tag}>
          <Sparkles size={14} />
          REFER & EARN
        </span>

        <h1>
          Share the joy.
          <br />
          <span>Earn rewards.</span>
        </h1>

        <p className={styles.description}>
          Invite your friends to VELOOP and enjoy
          rewards together. Sharing has never
          been this rewarding.
        </p>

        <div className={styles.referralBox}>
          <div>
            <small>Your referral code</small>
            <h3>{referralCode}</h3>
          </div>

          <button
            className={styles.copyButton}
            onClick={handleCopy}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied' : 'Copy Code'}
          </button>
        </div>

        <div className={styles.stats}>
          <Users size={18} />
          <span>Invite friends. Grow together.</span>
        </div>

      </div>

      <div className={styles.visual}>

        <div className={styles.glow}></div>

        <div className={styles.circle}>
          <Gift size={76} strokeWidth={1.3} />
        </div>

        <div className={styles.floatingCard}>
          <Sparkles size={18} />
          <span>Rewards await you</span>
        </div>

        <div className={styles.arrowIcon}>
          <ArrowUpRight size={22} />
        </div>

      </div>

    </section>
  );
}

export default ReferEarn;