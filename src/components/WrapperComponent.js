import React, { useEffect } from 'react';

const WrapperComponent = ({ children }) => {
    useEffect(() => {
        // Applying global styles and animations
        const CONFIG = {
            gradient: true,
            animated: true,
            highlight: 2,
            spread: 1,
            primary: '#ffffff',
            secondary: '#606060',
        };

        const updateStyles = () => {
            Object.keys(CONFIG).forEach((key) => {
                document.documentElement.style.setProperty(`--${key}`, CONFIG[key]);
            });
            document.documentElement.setAttribute('data-gradient', CONFIG.gradient);
            document.documentElement.setAttribute('data-animate', CONFIG.animated);
        };

        updateStyles();
    }, []);

    return (
        <div className="wrapper">
            {children}
            <style jsx>{`
        @font-face {
          font-family: 'Geist Sans';
          src: url('https://assets.codepen.io/605876/GeistVF.ttf') format('truetype');
        }

        * {
          box-sizing: border-box;
        }

        :root {
          --bg: hsl(0 0% 2%);
        }

        body {
          display: grid;
          place-items: center;
          min-height: 100vh;
          font-family: 'Geist Sans', sans-serif;
          font-weight: 80;
          background: var(--bg);
          overflow: hidden;
        }

        body::before {
          --size: 120px;
          --line: hsl(0 0% 100% / 0.13);
          --thickness: 2px;
          --offset: 60px;
          content: '';
          z-index: -1;
          position: absolute;
          inset: 0;
          background: linear-gradient(
              transparent 0 calc(var(--size) - var(--thickness)),
              var(--line) calc(var(--size) - var(--thickness)) var(--size)
            )
            var(--offset) var(--offset) / var(--size) var(--size),
            linear-gradient(
              90deg,
              transparent 0 calc(var(--size) - var(--thickness)),
              var(--line) calc(var(--size) - var(--thickness)) var(--size)
            )
            var(--offset) var(--offset) / var(--size) var(--size);
        }

        :root {
          --primary-bg: linear-gradient(var(--primary), var(--primary));
        }

        [data-gradient='true'] {
          --primary-bg: conic-gradient(
            from var(--angle, 180deg) at 50% 70%,
            hsla(0, 0%, 98%, 1) 0deg,
            #eec32d 72.0000010728836deg,
            #ec4b4b 144.0000021457672deg,
            #709ab9 216.00000858306885deg,
            #4dffbf 288.0000042915344deg,
            hsla(0, 0%, 98%, 1) 1turn
          );
        }

        h2 {
          font-weight: 120;
          line-height: 1.07;
          resize: both;
          overflow: hidden;
          width: 10ch;
          background: var(--primary-bg),
            linear-gradient(var(--secondary), var(--secondary)),
            linear-gradient(
              var(--secondary) 0 calc((var(--highlight) + var(--spread)) * 1lh),
              transparent
            );
          background-repeat: no-repeat;
          background-size: 100% calc(var(--highlight) * 1lh),
            100% calc((var(--highlight) + var(--spread)) * 1lh),
            100% 100%;
          background-clip: text;
          color: transparent;
          text-wrap: balance;
          font-size: clamp(2rem, 1rem + 4vw, 12rem);
          display: inline-block;
          margin: 0;
        }

        .wrapper {
          padding: 2rem;
          background: var(--bg);
          position: relative;
        }

        @media (prefers-reduced-motion: no-preference) {
          @property --angle {
            inherits: true;
            initial-value: 180deg;
            syntax: '<angle>';
          }
          @keyframes rotate {
            to {
              --angle: 540deg;
            }
          }
          [data-gradient='true'][data-animate='true'] {
            animation: rotate 6s infinite linear;
          }
        }
      `}</style>
        </div>
    );
};

export default WrapperComponent;
