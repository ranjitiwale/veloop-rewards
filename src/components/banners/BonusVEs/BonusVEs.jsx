
import { useState } from 'react';

import {
  Gift,
  Sparkles,
  ArrowRight,
  Coins,
  Star,
  Zap,
  Target,
  Trophy,
  CheckCircle2,
  X,
  Crown
} from 'lucide-react';

import styles from './BonusVEs.module.css';

function BonusVEs() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
  id="bonus-ves"
  className={styles.banner}
>

      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundOrb}></div>

      {/* LEFT CONTENT */}
      <div className={styles.content}>

        <div className={styles.tag}>
          <Sparkles size={15} />
          <span>EXCLUSIVE REWARD ZONE</span>
        </div>

        <h2>
          Every Activity
          <br />
          Brings You <span>More.</span>
        </h2>

        <p className={styles.description}>
          Discover exciting bonus opportunities,
          complete eligible activities and unlock
          more value from your VE rewards.
        </p>

        <button
          className={styles.cta}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Close Details' : 'Explore Bonuses'}

          {showDetails ? <X size={18} /> : <ArrowRight size={18} />}
        </button>

        <div className={styles.trust}>
          <CheckCircle2 size={16} />
          <span>Discover opportunities available to you</span>
        </div>

        {showDetails && (
          <div className={styles.details}>
            <strong>Your bonus journey starts here</strong>
            <p>
              Explore available bonus activities, review
              their eligibility and follow the instructions
              in your rewards account.
            </p>
          </div>
        )}

      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>

        <div className={styles.visualGlow}></div>
        <div className={`${styles.orbit} ${styles.orbitOne}`}></div>
<div className={`${styles.orbit} ${styles.orbitTwo}`}></div>
        <div className={styles.coinShadow}></div>

        <div className={styles.mainCoin}>
          <div className={styles.coinRim}>
            <div className={styles.coinFace}>
              <Crown size={30} />
              <Coins size={58} strokeWidth={1.4} />
              <span>VE</span>
              <small>REWARDS</small>
            </div>
          </div>
        </div>

        <div className={styles.rewardCard}>
          <div className={styles.giftIcon}>
            <Gift size={24} />
          </div>

          <div className={styles.rewardText}>
            <strong>Bonus Rewards</strong>
            <span>More ways to earn</span>
          </div>

          <Sparkles className={styles.cardSparkle} size={19} />
        </div>

        <div className={styles.topBadge}>
          <Star size={15} />
          <span>EXTRA BENEFITS</span>
        </div>

        <div className={styles.floatingCoin}>
          <Coins size={25} />
        </div>

        <div className={styles.floatingGift}>
          <Gift size={23} />
        </div>

        <div className={styles.sparkleOne}>
          <Sparkles size={23} />
        </div>

        <div className={styles.sparkleTwo}>
          <Star size={17} />
        </div>

      </div>

      {/* BOTTOM FEATURES */}
      <div className={styles.features}>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Target size={20} />
          </div>
          <div>
            <strong>Discover</strong>
            <span>Find bonus opportunities</span>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Zap size={20} />
          </div>
          <div>
            <strong>Participate</strong>
            <span>Complete eligible activities</span>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Trophy size={20} />
          </div>
          <div>
            <strong>Get Rewarded</strong>
            <span>Unlock eligible VE bonuses</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default BonusVEs;
