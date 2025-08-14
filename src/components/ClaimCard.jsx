import { ClaimCardWrapper, VerdictBadge, ClaimTitle, ClaimText, ClaimMeta, ClaimStats, CategoryTag, TrendingScore } from './ClaimCard.styled';

function ClaimCard({ claim, onClick, onShare }) {
  const getVerdictColor = (verdict) => {
    switch(verdict?.toLowerCase()) {
      case 'true': return '#10b981';
      case 'false': return '#ef4444'; 
      case 'mixed': return '#f59e0b';
      case 'uncertain': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    if (onShare) {
      await onShare(claim.id);
    }
  };

  return (
    <ClaimCardWrapper onClick={() => onClick?.(claim)}>
      <VerdictBadge $verdict={claim.verdict}>
        {claim.verdict || 'Processing...'}
        {claim.confidence && ` (${Math.round(claim.confidence * 100)}%)`}
      </VerdictBadge>
      
      <ClaimTitle>{claim.title}</ClaimTitle>
      
      <ClaimText>
        {claim.claim_text.length > 120 
          ? `${claim.claim_text.substring(0, 120)}...` 
          : claim.claim_text
        }
      </ClaimText>
      
      {claim.explanation && (
        <ClaimText style={{ fontStyle: 'italic', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          {claim.explanation.length > 100 
            ? `${claim.explanation.substring(0, 100)}...` 
            : claim.explanation
          }
        </ClaimText>
      )}
      
      <ClaimMeta>
        <CategoryTag $category={claim.category}>
          {claim.category}
        </CategoryTag>
        
        <TrendingScore>
          🔥 {Math.round(claim.trending_score * 100)}%
        </TrendingScore>
      </ClaimMeta>
      
      <ClaimStats>
        <div className="views">
          👁️ {claim.view_count}
        </div>
        
        <div className="time">
          {claim.processed_at ? 
            `Verified ${formatTimeAgo(claim.processed_at)}` : 
            `Found ${formatTimeAgo(claim.discovered_at)}`
          }
        </div>
        
        <button 
          className="share-btn"
          onClick={handleShare}
          title="Share this fact-check"
        >
          📤 {claim.share_count}
        </button>
      </ClaimStats>
    </ClaimCardWrapper>
  );
}

export default ClaimCard;