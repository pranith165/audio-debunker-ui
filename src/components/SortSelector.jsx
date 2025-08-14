import { SortWrapper, SortButton } from './SortSelector.styled';

function SortSelector({ selectedSort, onSortChange }) {
  const sortOptions = [
    { 
      value: 'hybrid', 
      label: '🔥 For You', 
      desc: 'Fresh + trending',
      tooltip: 'Best mix of fresh and high-quality content'
    },
    { 
      value: 'recent', 
      label: '🆕 Latest', 
      desc: 'Just discovered',
      tooltip: 'Most recently discovered claims'
    },
    { 
      value: 'trending', 
      label: '📈 Top Trending', 
      desc: 'Most controversial',
      tooltip: 'Highest trending scores regardless of age'
    },
    { 
      value: 'processed', 
      label: '✅ Recently Checked', 
      desc: 'Fresh fact-checks',
      tooltip: 'Most recently fact-checked claims'
    },
    { 
      value: 'popular', 
      label: '👥 Most Shared', 
      desc: 'High engagement',
      tooltip: 'Claims with highest view and share counts'
    }
  ];

  return (
    <SortWrapper>
      {sortOptions.map((option) => (
        <SortButton
          key={option.value}
          $active={selectedSort === option.value}
          onClick={() => onSortChange(option.value)}
          title={option.tooltip}
        >
          <div className="sort-label">{option.label}</div>
          <div className="sort-desc">{option.desc}</div>
        </SortButton>
      ))}
    </SortWrapper>
  );
}

export default SortSelector;