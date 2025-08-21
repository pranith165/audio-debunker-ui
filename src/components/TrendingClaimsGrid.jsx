import { useState, useEffect } from 'react';
import ClaimCard from './ClaimCard';
import CategoryFilter from './CategoryFilter';
import SortSelector from './SortSelector';
import { apiService } from '../services/apiService';
import { useErrorHandler } from '../hooks/useErrorHandler';
import ErrorNotification from '../common/ErrorNotification';
import { analytics } from '../utils/analytics';
import { 
  GridWrapper, 
  GridSideStripe,
  GridContent,
  GridHeader, 
  GridTitle, 
  GridSubtitle,
  ClaimsContainer, 
  LoadingSpinner,
  ErrorMessage,
  LoadMoreButton,
  StatsBar,
  AnalyzeOwnButton
} from './TrendingClaimsGrid.styled';

function TrendingClaimsGrid() {
  const [claims, setClaims] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('recent');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalClaims, setTotalClaims] = useState(0);
  const [allCategories, setAllCategories] = useState([]);
  const { error: errorHandler, handleError, clearError } = useErrorHandler();

  useEffect(() => {
    fetchTrendingClaims(1, true); // Reset to page 1 when category or sort changes
  }, [selectedCategory, selectedSort]);

  const fetchTrendingClaims = async (pageNum = page, reset = false) => {
    try {
      setLoading(true);
      setError(null);

      const params = {
        page: pageNum.toString(),
        limit: '12',
        sort: selectedSort,
        ...(selectedCategory && { category: selectedCategory })
      };

      const data = await apiService.getTrendingClaims(params);
      
      // Remove duplicates based on title only
      const removeDuplicates = (claims) => {
        const seen = new Set();
        return claims.filter(claim => {
          const key = claim.title;
          if (seen.has(key)) {
            return false;
          }
          seen.add(key);
          return true;
        });
      };
      
      const uniqueClaims = removeDuplicates(data.claims || []);
      
      if (reset) {
        setClaims(uniqueClaims);
        setPage(1);
      } else {
        // Also deduplicate when combining with existing claims
        const allClaims = [...claims, ...uniqueClaims];
        setClaims(removeDuplicates(allClaims));
      }
      
      // Handle categories from API response
      if (data.categories && data.categories.length > 0) {
        setAllCategories(data.categories);
      }
      setTotalClaims(data.total || 0);
      setHasMore(data.claims && data.claims.length === 12);
      
    } catch (error) {
      console.error('Error fetching trending claims:', error);
      setError('Failed to load trending claims. Please try again.');
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    // Track category filter usage
    analytics.trackEvent('category_filter_used', {
      category: 'trending_claims',
      label: category || 'all_categories',
      filter_type: 'category',
      selected_category: category || 'all'
    });

    setSelectedCategory(category);
    setPage(1);
  };

  const handleSortChange = (sort) => {
    // Track sorting filter usage
    analytics.trackEvent('sort_filter_used', {
      category: 'trending_claims',
      label: sort,
      filter_type: 'sort',
      selected_sort: sort
    });

    setSelectedSort(sort);
    setPage(1);
  };

  const handleLoadMore = () => {
    // Track load more usage
    analytics.trackEvent('load_more_claims', {
      category: 'engagement',
      label: `page_${page + 1}`,
      current_page: page,
      next_page: page + 1,
      current_filters: {
        category: selectedCategory || 'all',
        sort: selectedSort
      },
      claims_loaded: claims.length
    });

    const nextPage = page + 1;
    setPage(nextPage);
    fetchTrendingClaims(nextPage, false);
  };

  const handleClaimClick = async (claim) => {
    // Track claim interaction
    analytics.trackEvent('trending_claim_clicked', {
      category: 'engagement',
      label: claim.category,
      claim_id: claim.id,
      claim_category: claim.category,
      claim_verdict: claim.verdict,
      confidence_score: Math.round((claim.confidence || 0) * 100),
      view_count: claim.view_count || 0,
      current_filters: {
        category: selectedCategory || 'all',
        sort: selectedSort
      }
    });

    try {
      // Fetch full claim details from backend (public endpoint)
      const fullClaimData = await apiService.getClaimDetails(claim.id);
      // Navigate to results page with full claim data
      window.location.href = `/results?claimId=${claim.id}&data=${encodeURIComponent(JSON.stringify(fullClaimData))}`;
    } catch (error) {
      console.error('Error fetching claim details:', error);
      handleError(error);
      
      // Fallback to basic claim data if detailed fetch fails
      const basicData = {
        id: claim.id,
        verdict: claim.verdict,
        confidence: claim.confidence,
        explanation: claim.explanation,
        claim_text: claim.claim_text,
        title: claim.title,
        category: claim.category
      };
      window.location.href = `/results?claimId=${claim.id}&data=${encodeURIComponent(JSON.stringify(basicData))}`;
    }
  };

  const handleShare = async (claimId) => {
    // Find the claim being shared for analytics
    const sharedClaim = claims.find(claim => claim.id === claimId);
    
    // Track share action
    analytics.trackEvent('trending_claim_shared', {
      category: 'engagement',
      label: sharedClaim?.category || 'unknown',
      claim_id: claimId,
      claim_category: sharedClaim?.category,
      claim_verdict: sharedClaim?.verdict,
      current_filters: {
        category: selectedCategory || 'all',
        sort: selectedSort
      }
    });

    try {
      await apiService.shareClaim(claimId);
      // Update local share count
      setClaims(prev => prev.map(claim => 
        claim.id === claimId 
          ? { ...claim, share_count: claim.share_count + 1 }
          : claim
      ));
    } catch (error) {
      console.error('Error updating share count:', error);
      handleError(error);
    }
  };

  // Sample data for development if API fails
  const sampleClaims = [
    {
      id: 1,
      title: "Study Links Vaccines to Autism - Health Officials Respond",
      claim_text: "Vaccines cause autism in children according to new research published in medical journal",
      category: "Health",
      verdict: "False",
      confidence: 0.95,
      trending_score: 0.87,
      view_count: 1250,
      share_count: 45,
      discovered_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 2,
      title: "Climate Scientists Discover New Evidence",
      claim_text: "Global warming has been debunked by latest climate data showing cooling trends",
      category: "Science",
      verdict: "False",
      confidence: 0.92,
      trending_score: 0.75,
      view_count: 2100,
      share_count: 89,
      discovered_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 3,
      title: "Economic Policy Shows Promising Results",
      claim_text: "New economic policies have reduced unemployment to historic lows nationwide",
      category: "Politics",
      verdict: "Mixed",
      confidence: 0.78,
      trending_score: 0.82,
      view_count: 890,
      share_count: 34,
      discovered_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
    }
  ];

  const displayClaims = claims.length > 0 ? claims : (error ? [] : sampleClaims);
  const displayCategories = allCategories.length > 0 ? allCategories : ['Health', 'Politics', 'Science', 'Environment'];

  return (
    <GridWrapper>
      <GridSideStripe className="left"> </GridSideStripe>
      <GridContent>
        <GridHeader>
          <GridTitle>What's Actually True Today?</GridTitle>
          <GridSubtitle>
            AI-powered fact-checking of trending claims from news and social media
          </GridSubtitle>
        </GridHeader>

        <CategoryFilter 
          categories={displayCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <SortSelector 
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
        />

        {error && (
          <ErrorMessage>
            {error}
            <button onClick={() => fetchTrendingClaims(1, true)}>
              Try Again
            </button>
          </ErrorMessage>
        )}

        {loading && page === 1 ? (
          <LoadingSpinner>Loading trending claims...</LoadingSpinner>
        ) : (
          <>
            <ClaimsContainer>
              {displayClaims.map((claim) => (
                <ClaimCard 
                  key={claim.id} 
                  claim={claim} 
                  onClick={handleClaimClick}
                  onShare={handleShare}
                />
              ))}
            </ClaimsContainer>

            {hasMore && !loading && displayClaims.length > 0 && (
              <LoadMoreButton onClick={handleLoadMore}>
                Load More Claims
              </LoadMoreButton>
            )}

            {loading && page > 1 && (
              <LoadingSpinner>Loading more claims...</LoadingSpinner>
            )}
          </>
        )}
      </GridContent>
      <GridSideStripe className="right"> </GridSideStripe>
      
      {errorHandler && (
        <ErrorNotification
          error={errorHandler}
          onClose={clearError}
          autoRedirect={false}
        />
      )}
    </GridWrapper>
  );
}

export default TrendingClaimsGrid;