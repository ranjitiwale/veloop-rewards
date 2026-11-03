import { useState } from 'react';
import {
  ArrowDownUp,
  ArrowRight,
  RefreshCw,
  Sparkles
} from 'lucide-react';

import styles from './SwapCenter.module.css';

function SwapCenter() {
  const [reversed, setReversed] = useState(false);

  const handleSwap = () => {
    setReversed(!reversed);
  };

  return (
    <section
  id="swap-center"
  className={styles.banner}
>
    

      <div className={styles.content}>

        <span className={styles.tag}>
          <Sparkles size={15} />
          FLEXIBLE REWARDS
        </span>

        <h2>
          Swap your rewards.
          <br />
          <span>Your way.</span>
        </h2>

        <p className={styles.description}>
          Move between supported reward balances
          with a simple and seamless swapping experience.
        </p>

        <div className={styles.info}>
          <RefreshCw size={18} />
          <span>Simple. Flexible. Convenient.</span>
        </div>

      </div>

      <div className={styles.swapPanel}>

        <div className={styles.panelHeader}>
          <div>
            <span className={styles.panelLabel}>SWAP CENTER</span>
            <h3>Convert balances</h3>
          </div>

          <ArrowDownUp color="#D6AE65" size={23} />
        </div>

        <div className={styles.balanceBox}>
          <span>FROM</span>

          <div className={styles.balanceRow}>
            <strong>
              {reversed ? 'Balance B' : 'Balance A'}
            </strong>

            <span>Available balance</span>
          </div>
        </div>

        <button
          className={styles.swapIcon}
          onClick={handleSwap}
          aria-label="Switch swap direction"
        >
          <ArrowDownUp size={21} />
        </button>

        <div className={styles.balanceBox}>
          <span>TO</span>

          <div className={styles.balanceRow}>
            <strong>
              {reversed ? 'Balance A' : 'Balance B'}
            </strong>

            <span>Destination balance</span>
          </div>
        </div>

        <button
          className={styles.previewButton}
          onClick={handleSwap}
        >
          Switch Balances
          <ArrowRight size={18} />
        </button>

        <p className={styles.note}>
          Demo interface · No real transaction is performed.
        </p>

      </div>

    </section>
  );
}

export default SwapCenter;