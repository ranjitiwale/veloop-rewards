
import { useState } from 'react';

import {
  Wallet,
  ArrowRight,
  ArrowLeftRight,
  ShieldCheck,
  Gift,
  CheckCircle2,
  CreditCard,
  Coins,
  Smartphone,
  Sparkles,
  X
} from 'lucide-react';

import styles from './ExchangeCenter.module.css';

function ExchangeCenter() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('wallet');

  const options = [
    {
      id: 'wallet',
      name: 'Digital Wallet',
      description: 'Eligible wallet redemption',
      icon: Wallet
    },
    {
      id: 'gift',
      name: 'Gift Cards',
      description: 'Explore available gift cards',
      icon: Gift
    },
    {
      id: 'credit',
      name: 'Other Options',
      description: 'View supported redemption methods',
      icon: CreditCard
    }
  ];

  return (
    <section
          id="exchange-center"
          className={styles.banner}
        >

      {/* LEFT CONTENT */}
      <div className={styles.content}>

        <span className={styles.tag}>
          <ArrowLeftRight size={15} />
          REWARD REDEMPTION
        </span>

        <h2>
          Your rewards.
          <br />
          <span>Your choice.</span>
        </h2>

        <p className={styles.description}>
          Exchange your eligible VE rewards through
          supported redemption options. Choose a method
          and explore the possibilities.
        </p>

        <button
          className={styles.cta}
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? 'Hide Options' : 'Explore Exchange Options'}

          {showOptions ? (
            <X size={18} />
          ) : (
            <ArrowRight size={18} />
          )}
        </button>

        <div className={styles.trust}>
          <ShieldCheck size={16} />
          <span>Secure and transparent redemption experience</span>
        </div>

        {showOptions && (
          <div className={styles.optionsPanel}>
            <strong>Available demo options</strong>

            {options.map((option) => {
              const Icon = option.icon;

              return (
                <button
                  key={option.id}
                  className={`${styles.option} ${
                    selectedOption === option.id ? styles.activeOption : ''
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <Icon size={19} />

                  <span>
                    <strong>{option.name}</strong>
                    <small>{option.description}</small>
                  </span>

                  {selectedOption === option.id && (
                    <CheckCircle2 size={17} />
                  )}
                </button>
              );
            })}

            <p className={styles.demoNote}>
              Demo selection only. Actual availability depends
              on supported redemption methods.
            </p>
          </div>
        )}

      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>

        <div className={styles.glow}></div>
        <div className={styles.orbit}></div>

        <div className={styles.walletCard}>

          <div className={styles.walletHeader}>
            <span>EXCHANGE CENTER</span>
            <ShieldCheck size={19} />
          </div>

          <div className={styles.walletIcon}>
            <Wallet size={36} />
          </div>

          <h3>Redeem Rewards</h3>

          <p>Choose your preferred option</p>

          <div className={styles.walletDivider}></div>

          <div className={styles.walletFooter}>
            <span>Eligible rewards</span>
            <ArrowLeftRight size={18} />
          </div>

          <div className={styles.walletStatus}>
            <CheckCircle2 size={15} />
            <span>Redemption options available</span>
          </div>

        </div>

        <div className={styles.floatingCoin}>
          <Coins size={27} />
        </div>

        <div className={styles.floatingGift}>
          <Gift size={24} />
        </div>

        <div className={styles.floatingPhone}>
          <Smartphone size={22} />
        </div>

        <div className={styles.sparkle}>
          <Sparkles size={24} />
        </div>

      </div>

      {/* BOTTOM FEATURES */}
      <div className={styles.features}>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Coins size={19} />
          </div>
          <div>
            <strong>Eligible Rewards</strong>
            <span>Check your available balance</span>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Wallet size={19} />
          </div>
          <div>
            <strong>Choose Method</strong>
            <span>Explore supported options</span>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <ShieldCheck size={19} />
          </div>
          <div>
            <strong>Redeem Securely</strong>
            <span>Follow redemption instructions</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ExchangeCenter;
