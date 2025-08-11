// Waves.jsx
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const waveSm = keyframes`
  0% {
    opacity: 0.35;
    height: 10px;
  }
  100% {
    opacity: 1;
    height: 25px;
  }
`;

const waveMd = keyframes`
  0% {
    opacity: 0.35;
    height: 15px;
  }
  100% {
    opacity: 1;
    height: 50px;
  }
`;

const waveLg = keyframes`
  0% {
    opacity: 0.35;
    height: 15px;
  }
  100% {
    opacity: 1;
    height: 70px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`;

const WaveContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bar = styled.div`
  background: #000;
  margin: 0 1.5px;
  width: 1px;
  animation-name: ${waveLg};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;

  &.wave-md {
    animation-name: ${waveMd};
  }

  &.wave-sm {
    animation-name: ${waveSm};
  }
`;

const Waves = ({ animation = false }) => {
  useEffect(() => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
      const duration = Math.random() * (0.7 - 0.2) + 0.2;
      bar.style.animationDuration = `${duration}s`;
      bar.style.animationPlayState = animation ? 'running' : 'paused';
    });
  }, [animation]);

  const bars = Array.from({ length: 80 }).map((_, i) => {
    let className = 'bar';
    if (i < 7 || i >= 73) className += ' wave-md';
    if (i < 3 || i >= 77) className += ' wave-sm';

    return <Bar key={i} className={className} />;
  });

  return (
    <Wrapper>
      <WaveContainer>{bars}</WaveContainer>
    </Wrapper>
  );
};

export default Waves;
